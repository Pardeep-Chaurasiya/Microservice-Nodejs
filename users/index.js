const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("User Service");
});

app.get("/user/me", (req, res) => {
  console.log("Me user service");
  res.send("User Service me");
});

app.listen(3000, () => {
  console.log("User service started on port 3000");
});
