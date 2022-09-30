require("dotenv").config();
const jwt = require("jsonwebtoken");
const user = require("../Schema/User");

//Xác thực cho token
exports.verifyToken = async (req, res, next) => {
  const token = req.headers["x-token"];
  jwt.verify(token, process.env.PRIVATEKEY, function (err, decoded) {
    if (err) {
      if (err.message === "jwt expired") {
        return res.send({ messenger: "Token het han" });
      } else {
        return res.status(400).json({ message: err.message });
      }
    } else {
      return next();
    }
  });
};

//Tạo token mới
exports.createToken = (data) => {
  let token = jwt.sign({ data: data }, process.env.PRIVATEKEY, {
    expiresIn: "1h",
  });
  return token;
};

//Xử lý refreshToken
exports.refreshToken = async (req, res) => {
  const dataToken = req.headers["x-token"];
  let token = jwt.sign({ data: dataToken }, process.env.PRIVATEKEY, {
    expiresIn: "4h",
  });
  return res.status(200).json({ token, message: "Success" });
};
