const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(6000);
