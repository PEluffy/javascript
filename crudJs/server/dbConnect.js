import { createConnection } from "mysql2";

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_js",
});

const conn = connection.connect(function (err, connection) {
  if (err) {
    console.err("error connecting  to Db :", err);
  } else {
    console.log("connection Success");
  }
});
