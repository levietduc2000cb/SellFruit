const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/handleToken");
const {
  getItems,
  getDetailItem,
  getNamebyType,
  getNameItems,
  getSimilarItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controller/ItemsController");

router.get("/", getItems);
router.get("/getNameItems", getNameItems);
router.get("/getNamebyType", getNamebyType);
router.post("/createItem", verifyToken, createItem);
router.patch("/updateItem", verifyToken, updateItem);
router.delete("/deleteItem", verifyToken, deleteItem);
router.get("/detailItem/:id", getDetailItem);
router.get("/similarItems", getSimilarItems);

module.exports = router;
