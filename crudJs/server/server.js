const express = require("express");
const app = express();
const path = require("path");
const connection = require("../database/dbConnect");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../database/Utilities");

function DatabaseExceptionError(error) {
  console.error(error);
}
function ConnectionEstalbished(connection) {
  console.log("sucess database Connection");
}
if (!connection) {
  DatabaseExceptionError("Connection not esthablished");
} else {
  ConnectionEstalbished(connection);
}

app.use(express.static(path.join(__dirname, "../client")));
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../client/crud.html"));
});
app.post("/submit", async (req, res) => {
  return res.end("sending data to database");
});

app.listen(3000, () => console.log("Server Started"));
