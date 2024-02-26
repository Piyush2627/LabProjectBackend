const { Pool } = require("pg");

const pool = new Pool({
  user: "piyush",
  host: "localhost",
  database: "collagedb",
  password: "hellothere",
  port: "5432",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
