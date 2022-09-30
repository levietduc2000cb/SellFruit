const orders = require("../Schema/Orders");

exports.getOrders = async (req, res, next) => {
  const { idUser } = req.query;
  try {
    if (idUser) {
      const dataRes = await orders
        .find({ userInforId: idUser })
        .sort({ dateCreate: -1 });
      if (dataRes) {
        res.status(200).json({ message: "Success", orders: [...dataRes] });
      }
    } else {
      const dataRes = await orders.find().sort({ dateCreate: -1 });
      if (dataRes) {
        res.status(200).json({ message: "Success", orders: [...dataRes] });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};

exports.addOrders = async (req, res, next) => {
  const { userInforId, userInfor, methodPay, items, totalPrice, message } =
    req.body;
  const newOrder = new orders({
    userInforId,
    userInfor: {
      firstName: userInfor.firstName,
      lastName: userInfor.lastName,
      phoneNumber: userInfor.phoneNumber,
      emailAddress: userInfor.emailAddress,
      address: userInfor.address,
      imageAvatar: userInfor.imageAvatar,
    },
    methodPay,
    items,
    totalPrice,
    messageFromCustomer: message,
    confirm: false,
  });
  try {
    const data = await newOrder.save();
    if (data) {
      res.status(200).json({ orders: data, message: "Success" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};

exports.confirmOrder = async (req, res, next) => {
  const { id } = req.body;
  try {
    let doc = await orders.findOneAndUpdate(
      { _id: id },
      {
        confirm: true,
      },
      {
        new: true,
      }
    );
    if (doc) {
      return res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Failure" });
  }
};
