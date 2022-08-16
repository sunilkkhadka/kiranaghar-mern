const express = require("express");
const connectDb = require("./config/db");

const productRoutes = require("./routes/productRoutes");

connectDb();

const app = express();

//Creating routes
// app.get() -- app.post() -- app.put() -- app.delete()

// Home url
app.get("/", (req, res) => {
  res.send("SERVER is running...");
});

app.use("/api/products", productRoutes);

app.listen(5000, console.log(`Listening on port ${5000}`));
