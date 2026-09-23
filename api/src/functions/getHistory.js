const { app } = require("@azure/functions");
const { sql, getPool } = require("../shared/db.js");
const { getUser } = require("../shared/getUser.js");

app.http("getHistory", {
    methods: ["GET"],
    authLevel: "anonymous",
    route: "getHistory",
    handler: async (request, context) => {
        //check if user logged in
        const user = getUser(request);
        if (!user){
            return { status: 401, body: "Not Logged In" };
        }

        try {
            const pool = await getPool();
            const result = await pool.request().input("UserId", sql.NVarChar, user.userId).query("SELECT * FROM Orders WHERE UserId = @UserId");
            return {
                status: 200,
                jsonBody: result.recordset,
            };


        } catch (err){
            context.error(err);
            return { status: 500, body: "DB error"};
        }
    },
});