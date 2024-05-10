document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a FormData object
    var formData = new FormData(this);

    // Convert formData to JSON
    var jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    var json = JSON.stringify(jsonData);

    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
  });

function displayEmployees(employees) {
  const password = document.getElementById("password"); //content of index.html
  const tableBody = document.getElementById("employeeTableBody"); //contenct of disEmploye.html
  console.log(password);
  console.log(tableBody);
  tableBody.innerHTML = "";
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${employee.e_id}<td>
    <td>${employee.e_name}</td>
    <td>${employee.e_email}</td>
    <td>${employee.e_address}</td>
    <td>${employee.e_password}</td>`;
    tableBody.appendChild(row);
  });
}

document.getElementById("displayButton").addEventListener("click", async () => {
  const response = await fetch("/employees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  displayEmployees(response);
  console.log(response);
});
