const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewSchema = new Schema({
  title: String,
  titleContent: String,
  content: String,
  imageTitle: String,
  dateCreate: { type: Date, default: Date.now },
});
const fruitNews = mongoose.model("fruitNews", NewSchema);
module.exports = fruitNews;
