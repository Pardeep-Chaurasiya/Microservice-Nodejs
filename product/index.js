const express = require("express");

const app = express();

app.get("/product", (req, res) => {
  console.log("Product Service");
  res.send("Product service");
});

app.get("/product/me", (req, res) => {
  console.log("Me product service");
  res.send("Product service me");
});

app.listen(3001, () => {
  console.log("Product service started on port 3001");
});
