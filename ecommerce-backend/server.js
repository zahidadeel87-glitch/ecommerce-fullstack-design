const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// GET ALL PRODUCTS
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ADD PRODUCT
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/add-products", async (req, res) => {
  await Product.insertMany([
    {
      name: "Shoes",
      price: 2000,
      image: "",
      description: "Sports shoes",
      category: "Fashion",
      stock: 10,
    },
    {
      name: "Watch",
      price: 5000,
      image: "",
      description: "Smart watch",
      category: "Accessories",
      stock: 5,
    },
    {
      name: "Bag",
      price: 3000,
      image: "",
      description: "Travel bag",
      category: "Fashion",
      stock: 8,
    },
  ]);

  res.send("Products Added");
});

app.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});