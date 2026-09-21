const sql = require("mssql");

const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

let poolPromise;

function getPool() {
    //console.log(process.env.SQL_CONNECTION_STRING);
    if (!poolPromise) {
        poolPromise = sql.connect(config);
    }
    return poolPromise;
}

module.exports = { sql, getPool };