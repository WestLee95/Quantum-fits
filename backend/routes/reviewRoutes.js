import express from 'express';
import asyncHandler from 'express-async-handler';
import Review from '../models/Review.js';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:productId', protect, asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.productId);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400).json({ message: 'Product already reviewed' });
      return;
    }

    const review = new Review({
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
      product: req.params.productId,
    });

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating = 
      product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

    await review.save();
    await product.save();

    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}));

export default router;

