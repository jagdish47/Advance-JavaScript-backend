const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Dashboard");
});

app.get("/home", (req, res) => {
  res.json({
    message: "Get Home",
  });
});

app.post("/home", (req, res) => {
  res.json({
    message: "Post Home",
  });
});

app.listen(3000, () => {
  console.log("Listening at PORT:3000");
});
