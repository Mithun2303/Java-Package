const Pool = require("pg").Pool;

const pool = new Pool(
    {user: "YOUR_USERNAME",
    database: "YOUR_DATABASE_NAME",
    password: "YOUR_PASSWORD",
    host:"localhost",
    port:5432,
    }
)

module.exports=pool;