const express = require("express");
const router = express.Router();

const { sendEmail } = require("../util/SendEmail");

router.post("/sendEmail", sendEmail);

module.exports = router;
