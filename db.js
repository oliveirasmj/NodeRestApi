const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "sawm"
})

module.exports = pool;