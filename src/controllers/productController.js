const productService = require('../services/productService');
const productModel = require('../models/productModel');

const getAllProductController = async (_req, res) => {
  const getProduct = await productModel.getAllProductModel();
  res.status(200).json(getProduct);
};

const getByIdProductController = async (req, res) => {
  const productId = Number(req.params.id);
  const findByIdProduct = await productService.getByIdProductService(productId);
  const product = findByIdProduct.find((productItem) => productItem.id === productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

const addProductByName = async (req, res) => {
  const { name } = req.body;
  const addProduct = await productService.addProductService(name);
  res.status(201).json(...addProduct);
};

module.exports = {
  getAllProductController,
  getByIdProductController,
  addProductByName,
};