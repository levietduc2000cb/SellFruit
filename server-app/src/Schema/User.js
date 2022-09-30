const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  account: String,
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  emailAddress: String,
  address: String,
  imageAvatar: String,
  admin: { type: Boolean, default: false },
});
const fruitUser = mongoose.model("fruitUser", UserSchema);
module.exports = fruitUser;
