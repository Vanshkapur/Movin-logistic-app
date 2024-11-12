const express = require("express");
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Fetch Orders Error:", error); 
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
});

const createOrder = asyncHandler(async (req, res) => {
  const {
    senderName,
    senderAddress,
    recipientName,
    recipientAddress,
    packageDetails,
    pickupDate,
    contactNumber,
    weight,
  } = req.body;

  try {
    const order = await Order.create({
      senderName,
      senderAddress,
      recipientName,
      recipientAddress,
      packageDetails,
      pickupDate,
      contactNumber,
      weight,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error); 
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
});

module.exports = {
  getOrders,
  createOrder,
};
