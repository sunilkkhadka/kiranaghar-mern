const express = require("express");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

connectDb();

const app = express();

/*
  we might come into a problem where the json is not read by express, in that case do not forget to
  set header as "Content-type" : "application/json"
*/
app.use(bodyParser.json());

//Creating routes
// app.get() -- app.post() -- app.put() -- app.delete()

// Home url
app.get("/", (req, res) => {
  res.send("SERVER is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(5000, console.log(`Listening on port ${5000}`));
