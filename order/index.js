const express = require("express");
const axios = require("axios");

const app = express();

app.get("/order", async (req, res) => {
  const user = await axios.get("http://localhost:3000/user");

  res.status(200).send("Order Service " + user.data);
});

app.get("/order/me", (req, res) => {
  console.log("Me Order service");
  res.status(200).send("Order service me");
});

app.listen(3002, () => {
  console.log("Order service started on port 3002");
});
