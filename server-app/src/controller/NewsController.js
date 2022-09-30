const News = require("../Schema/News");

exports.getNews = async (req, res, next) => {
  try {
    const data = await News.find({}).limit(5);
    if (data.length > 0) {
      res.status(200).json({ news: data });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};

exports.getDetailNews = async (req, res, next) => {
  const { id } = req.query;
  try {
    const data = await News.findById(id);
    if (data) {
      res.status(200).json({ message: "Success", news: data });
    } else {
      res.status(200).json({ message: "Success", news: {} });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};
