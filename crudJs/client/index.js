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
