const { app } = require("@azure/functions");
const { sql, getPool } = require("../shared/db.js");
const { getUser } = require("../shared/getUser.js");

app.http("checkout", {
    methods: ["POST"],
    authLevel: "anonymous",
    route: "checkout",
    handler: async (request, context) => {
        //confirm user is logged in
        const user = getUser(request);
        if (!user){
            return { status: 401, body: "Not Logged In" };
        }

        //parse cart from request body
        const body = await request.json();
        const { cart } = body;

        if (!cart || cart.length === 0){
            return { status: 400, body: "Cart is empty" };
        }

        //start transaction, if one call fails all do
        const pool = await getPool();
        const transaction = new sql.Transaction(pool);

        try {
            await transaction.begin();

            //calculate total server-side (safer than trusting client-side)
            const total = cart.reduce((sum, item) => sum + item.price + item.quantity, 0);

            //insert order to Order table, then get ID
            const orderResult = await new sql.Request(transaction)
                .input("UserId", sql.NVarChar, user.userId)
                .input("Status", sql.NVarChar, "Pending")
                .input("Total", sql.Decimal(10,2), total)
                .query(`INSERT INTO Orders (UserId, OrderDate, Status, Total) OUTPUT INSERTED.OrderId VALUES (@UserId, GETDATE(), @Status, @Total)`);
            
            const orderId = orderResult.recordset[0].OrderId;

            //go through cart and add each item to OrderId table
            for (const item of cart) {
                await new sql.Request(transaction)
                    .input("OrderId", sql.Int, orderId)
                    .input("ProductId", sql.Int, item.productId)
                    .input("ProductName", sql.NVarChar, item.name)
                    .input("Quantity", sql.Int, item.quantity)
                    .input("Price", sql.Decimal(10,2), item.price)
                    .query(`INSERT INTO OrderItems (OrderId, ProductId, ProductName, Quantity, Price) VALUES (@OrderId, @ProductId, @ProductName, @Quantity, @Price)`);
            }

            await transaction.commit();
            return {
                status: 200,
                jsonBody: { success: true, orderId },
            };
        } catch (err) {
            await transaction.rollback();
            context.error(err);
            return { status: 500, body: "Checkout Failed" }
        }
    },
});