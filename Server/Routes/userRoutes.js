const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");
const { getUserById } = require("../controller/userController");

router.post("/register", registerUser);
router.get("/:id", getUserById);

module.exports = router;
