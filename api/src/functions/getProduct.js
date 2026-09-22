const { app } = require("@azure/functions");
const { sql, getPool } = require("../shared/db.js");

app.http("getProduct", {
    methods: ["GET"],
    authLevel: "anonymous",
    route: "getProduct",
    handler: async (request, context) => {
        try {
            const productId = request.query.get("id") //reads ?id=42 from url

            if (!productId) {
                return { status: 400, body: "Missing product ID"};
            }

            const pool = await getPool();
            const result = await pool.request().input("ProductId", sql.Int, productId).query("SELECT * FROM Products WHERE ProductId = @ProductId")

            if (result.recordset.length === 0){
                return {status: 400, body: "Product not found"};
            }

            return {
                status: 200,
                jsonBody: result.recordset[0],
            };
        } catch (err) {
            context.error(err);
            return { status: 500, body: "DB error"};
        }
    },
});