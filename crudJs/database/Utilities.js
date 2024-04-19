const connection = require(`./dbConnect`);

function errorWhileCrud(operation, error) {
  console.log(`error while ${operation} operation ${error}`);
}
function successWhileCrud(operation, result) {
  console.log(`success while ${operation} operation ${result}`);
}
function errorHandler(error, result, operation) {
  if (error) {
    errorWhileCrud(operation, error);
  } else {
    successWhileCrud(operation, result);
  }
}

function createUser(data) {
  const { name, email, address, password } = data;
  const sql = `INSERT INTO employee (name,email,address,password) VALUES (?,?,?,?) `;
  connection.query(sql, [name, email, address, password], (error, result) => {
    errorHandler(error, result, "create");
  });
}
function readUser() {
  const sql = `Select * FROM  employee`;
  connection.query(sql, (error, result) => {
    errorHandler(error, result, "read");
  });
}
function updateUser(id, data) {
  const { name, email, address, password } = data;
  const sql = `UPDATE employee SET name=? ,email=? ,address=?,password=? WHERE id= ?`;
  connection.query(
    sql,
    [name, email, address, password, id],
    (error, result) => {
      errorHandler(error, result, "update");
    }
  );
}
function deleteUser(id) {
  const sql = `DELETE FROM employee WHERE ID=?`;
  connection.query(sql, id, (error, result) => {
    errorHandler(error, result, "delete");
  });
}

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
