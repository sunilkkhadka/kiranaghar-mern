// Importing dependecies
const mongoose = require("mongoose");

// Importing db connection
const connectDb = require("./config/db");

//Importing data from data folder
const users = require("./data/users");
const products = require("./data/products");

//Importing models from models folder
const Users = require("./models/userModel");
const Orders = require("./models/orderModel");
const Products = require("./models/productModel");

//CODE

connectDb();

const importData = async () => {
  try {
    /*
        Wiping out everything from database to not import anything from database
        deleteManu() => deletes everything
    */
    await Orders.deleteMany();
    await Products.deleteMany();
    await Users.deleteMany();

    const createdUsers = await Users.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Products.insertMany(sampleProducts);

    console.log("Data imported!");
    process.exit();
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    process.exit();
  }
};

const destroyData = async () => {
  try {
    /*
          Wiping out everything from database to not import anything from database
          deleteManu() => deletes everything
      */
    await Orders.deleteMany();
    await Products.deleteMany();
    await Users.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    process.exit();
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
