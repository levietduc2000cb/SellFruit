const mongoose = require("mongoose");
const { Schema } = mongoose;

const Orderschema = new Schema({
  userInforId: String,
  userInfor: Object,
  methodPay: String,
  items: Array,
  totalPrice: Number,
  messageFromCustomer: String,
  confirm: Boolean,
  dateCreate: { type: Date, default: Date.now },
});
const orders = mongoose.model("orders", Orderschema);
module.exports = orders;
