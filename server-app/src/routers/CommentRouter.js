const express = require("express");
const router = express.Router();
const {
  getComment,
  createComment,
} = require("../controller/CommentController");
const { verifyToken } = require("../middleware/handleToken");

router.post("/createcomment", verifyToken, createComment);
router.get("/", verifyToken, getComment);

module.exports = router;
