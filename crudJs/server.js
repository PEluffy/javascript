const express = require("express");
const app = express();
const path = require("path");
const connection = require("./database/dbConnect");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("./database/Utilities");

app.use(express.json());

app.use(express.static(path.join(__dirname, "./client")));

app.post("/submit", async (req, res) => {
  const body = req.body;
  var arr = new Array();
  for (var key in body) {
    arr.push(body[key]);
  }
  createUser(arr);
});
app.listen(3000, () => console.log("Server Started"));

app.get("/employees", async (req, res) => {
  const data = await readUser();
  res.send(data);
});
// function DatabaseExceptionError(error) {
//   console.error(error);
// }
// function ConnectionEstalbished(connection) {
//   console.log("sucess database Connection");
// }
// if (!connection) {
//   DatabaseExceptionError("Connection not esthablished");
// } else {
//   ConnectionEstalbished(connection);
// }
