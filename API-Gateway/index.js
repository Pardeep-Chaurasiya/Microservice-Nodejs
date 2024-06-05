const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const routes = {
  "/user": "http://localhost:3000/user",
  "/product": "http://localhost:3001/product",
  "/order": "http://localhost:3002/order",
};

for (const route in routes) {
  const target = routes[route];
  app.use(route, createProxyMiddleware({ target }));
}

app.listen(8000, () => {
  console.log("API Gateway service started on port 8000");
});
