const express = require("express");
const router = express.Router();

const {
  getOrders,
  addOrders,
  confirmOrder,
} = require("../controller/OrdersController");
const { verifyToken } = require("../middleware/handleToken");

router.get("/getorders", verifyToken, getOrders);
router.post("/addorders", verifyToken, addOrders);
router.post("/confirmOrder", verifyToken, confirmOrder);

module.exports = router;
