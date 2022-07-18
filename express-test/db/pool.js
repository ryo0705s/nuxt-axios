const { Pool } = require("pg");
const pool = new Pool({
  user: "sasakiryou",
  host: "127.0.0.1",
  database: "expressdb",
  password: "3391sanda",
  port: 5432,
});

module.exports = pool;
