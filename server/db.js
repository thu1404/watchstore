const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "140400",
    host: "localhost",
    port: 5432,
    database: "watchstore"
});

module.exports = pool;