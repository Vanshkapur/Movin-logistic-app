const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  senderAddress: {
    type: String,
    required: true,
  },
  recipientName: {
    type: String,
    required: true,
  },
  recipientAddress: {
    type: String,
    required: true,
  },
  packageDetails: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    enum: ["5kg", "10kg", "15kg", "25kg", "more than 25kg"],
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
