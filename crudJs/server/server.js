import { createServer } from "http";
import * as fs from "node:fs";
const port = 3000;

const server = createServer((req, res) => {
  fs.readFile("../client/crud.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port no.", port);
  }
});
