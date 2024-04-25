const { createConnection } = require("mysql2/promise");

const buildConnection = async function () {
  try {
    const conn = await createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "crud_js",
    });
    console.log("Connected to MySQL database!");
    return conn;
  } catch (err) {
    console.error("error connecting to mysql database");
  }
};

module.exports = buildConnection;
