const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

//  Create new product

const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, quantity, category } = req.body;

  const product = new Product({ name, description, price, quantity, category });
  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

//  Get all products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate('category');
  res.status(200).json(products);
});

//  Get product by ID

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.status(200).json(product);
});

//  Update product

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  const { name, description, price, quantity, category } = req.body;

  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = price;
  if (quantity) product.quantity = quantity;
  if (category) product.category = category;

  const updatedProduct = await product.save();
  res.status(200).json(updatedProduct);
});

// Delete product

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  await product.deleteOne();
  res.status(200).json({ message: 'Product deleted successfully' });
});

//  Search products by name
const searchProducts = asyncHandler(async (req, res) => {
  const name = req.query.name;
  const products = await Product.find({ name: { $regex: name, $options: 'i' } });
  res.status(200).json(products);
});

//  Filter products by category

const filterProductsByCategory = asyncHandler(async (req, res) => {
  const category = req.query.category;
  const products = await Product.find({ category });
  res.status(200).json(products);
});

//  Get low stock products
const getLowStockProducts = asyncHandler(async (req, res) => {
  const lowStock = await Product.find({ quantity: { $lt: 10 } });
  res.json(lowStock);
});


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  filterProductsByCategory,
  getLowStockProducts,
};
