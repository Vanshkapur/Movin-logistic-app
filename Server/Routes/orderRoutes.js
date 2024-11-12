const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controller/orderController");

router.get("/", getOrders);
router.post("/create", createOrder);

module.exports = router;