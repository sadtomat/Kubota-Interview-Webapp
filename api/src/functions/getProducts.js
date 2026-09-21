const { app } = require("@azure/functions");
const { getPool } = require("../shared/db.js");

app.http("getProducts", {
    methods: ["GET"],
    authLevel: "anonymous",
    route: "getProducts",
    handler: async (request, context) => {
        try {
            const pool = await getPool();
            const result = await pool.request().query("SELECT * FROM Products")

            return {
                status: 200,
                jsonBody: result.recordset,
            };
        } catch (err) {
            context.error(err);
            return { status: 500, body: "DB error"};
        }
    },
});