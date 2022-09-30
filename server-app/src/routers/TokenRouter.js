const express = require("express");
const router = express.Router();
const { verifyToken, refreshToken } = require("../middleware/handleToken");

router.post("/verifyToken", verifyToken);
router.get("/refreshToken", refreshToken);
module.exports = router;
