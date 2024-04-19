const { createConnection } = require("mysql2");

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_js",
});

module.exports = connection;
