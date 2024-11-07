// /src/controllers/productController.js

const Product = require('../models/Product');  // Import the Product model

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the database
    res.status(200).json({ products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;  // Get the product ID from the URL parameter

  try {
    const product = await Product.findById(id);  // Find the product by its ID

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  if (!name || !description || !price || !stock) {
    return res.status(400).json({ error: 'All fields (name, description, price, stock) are required' });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
    });

    await newProduct.save();  // Save the new product to the database
    res.status(201).json({ product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};
