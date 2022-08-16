const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

const Products = require("../models/productModel");

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Products.find({});

    res.json(products);
  })
);

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  })
);

module.exports = router;
