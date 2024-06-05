import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}));

router.get('/search', asyncHandler(async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({ $text: { $search: query } });
  res.json(products);
}));

export default router;

