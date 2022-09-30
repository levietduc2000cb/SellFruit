const user = require("../Schema/User");
const { createToken } = require("../middleware/handleToken");
const { uploadToCloudinary } = require("../cloudinary/uploadToCloudinary");
//Đăng Ký
exports.register = async (req, res) => {
  const {
    account,
    password,
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    address,
  } = req.body;
  try {
    const dataAvaible = await user.find({
      account: account,
    });
    if (dataAvaible.length > 0) {
      return res.send({ message: "Tài khoản hoặc mật khẩu đã được sử dụng" });
    } else if (dataAvaible.length === 0) {
      let doc = new user({
        account: account,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        address: address,
        imageAvatar:
          "https://res.cloudinary.com/dg5r0cyek/image/upload/v1660662561/fruitAvatar/avatar_none_dunduz.jpg",
      });
      const data = await doc.save();
      const token = createToken(lastName + firstName);
      if (data.admin === true) {
        return res.status(200).json({
          token,
          user: {
            id: data._id,
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            address,
            imageAvatar: data.imageAvatar,
            admin: data.admin,
          },
        });
      }
      return res.status(200).json({
        token,
        user: {
          id: data._id,
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          address,
          imageAvatar: data.imageAvatar,
        },
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Lỗi trong quá trình tạo tài khoản" });
  }
};

//Đăng nhập
exports.login = async (req, res, next) => {
  const { account, password } = req.body;
  try {
    const data = await user.findOne({
      account: account,
      password: password,
    });
    if (data) {
      const { firstName, lastName, phoneNumber, emailAddress, address } = data;
      let token = createToken(lastName + firstName);
      if (data.admin === true) {
        return res.status(200).json({
          token,
          user: {
            id: data._id,
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            address,
            imageAvatar: data.imageAvatar,
            admin: data.admin,
          },
        });
      }
      return res.status(200).json({
        token,
        user: {
          id: data._id,
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          address,
          imageAvatar: data.imageAvatar,
        },
      });
    } else {
      return res
        .status(200)
        .send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Có lỗi trong quá trình đăng nhập" });
  }
};

//Chỉnh sửa trang cá nhân
exports.editProfile = async (req, res, next) => {
  const {
    id,
    firstName,
    lastName,
    phoneNumber,
    emailAddress,
    address,
    imageAvatar,
  } = req.body;
  try {
    const uploadedRes = await uploadToCloudinary(imageAvatar, "fruitAvatar");
    if (uploadedRes) {
      const { url } = uploadedRes;
      let doc = await user.findOneAndUpdate(
        { id: id },
        {
          firstName,
          lastName,
          phoneNumber,
          emailAddress,
          address,
          imageAvatar: url,
        },
        {
          new: true,
        }
      );
      if (doc) {
        if (doc.admin === true) {
          return res.status(200).json({
            message: "Success",
            user: {
              id: doc._id,
              firstName: doc.firstName,
              lastName: doc.lastName,
              phoneNumber: doc.phoneNumber,
              emailAddress: doc.emailAddress,
              address: doc.address,
              imageAvatar: doc.imageAvatar,
              admin: doc.admin,
            },
          });
        }
        return res.status(200).json({
          message: "Success",
          user: {
            id: doc._id,
            firstName: doc.firstName,
            lastName: doc.lastName,
            phoneNumber: doc.phoneNumber,
            emailAddress: doc.emailAddress,
            address: doc.address,
            imageAvatar: doc.imageAvatar,
          },
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Failure upload" });
  }
};
