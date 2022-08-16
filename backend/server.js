const express = require("express");
const products = require("./data/products");

const PORT = 5000;
const app = express();

//Creating routes
// app.get() -- app.post() -- app.put() -- app.delete()

// Home url
app.get("/", (req, res) => {
  res.send("SERVER is running...");
});

// Product url
app.get("/api/products", (req, res) => {
  res.json(products);
});

//Product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
