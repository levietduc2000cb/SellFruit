const express = require("express");
const router = express.Router();

const { getNews, getDetailNews } = require("../controller/NewsController");

router.get("/getnews", getNews);
router.get("/newsDetail", getDetailNews);
// router.post("/createNews", createNews);

module.exports = router;
