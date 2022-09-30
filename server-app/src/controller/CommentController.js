const comments = require("../Schema/Comment");

//Lấy comment
exports.getComment = async (req, res, next) => {
  const { idProduct } = req.query;
  try {
    const data = await comments
      .find({ idItem: idProduct })
      .sort({ _id: -1 })
      .limit(5);
    if (data) {
      res.status(200).json({ commentsUser: data, message: "Success" });
    } else {
      res.status(200).json({ commentsUser: [], message: "Success" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};

//Tạo comment
exports.createComment = async (req, res, next) => {
  const docComment = new comments({ ...req.body });
  try {
    const data = await docComment.save();
    if (data) {
      res.status(200).json({ commentUser: data, message: "Success" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};
