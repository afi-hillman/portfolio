const express = require("express");
const app = express();
const port = 1001;
const path = require("node:path");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/*", function (req, res) {
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
