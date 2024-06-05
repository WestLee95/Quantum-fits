import express from 'express';
import paypalClient from '../config/paypal.js';
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-payment', protect, async (req, res) => {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [{
      amount: {
        currency_code: "USD",
        value: req.body.totalPrice,
      }
    }]
  });

  try {
    const order = await paypalClient.execute(request);
    res.status(201).json({ id: order.result.id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/capture-payment', protect, async (req, res) => {
  const { orderID } = req.body

