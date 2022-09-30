const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  price: Number,
  sale: Number,
  realPrice: Number,
  img: String,
  date: { type: Date, default: Date.now },
  origin: String,
  preserve: String,
  nutritionalValue: String,
  describe: String,
  type: String,
});
const fruitItems = mongoose.model("fruitItems", ItemSchema);
module.exports = fruitItems;
