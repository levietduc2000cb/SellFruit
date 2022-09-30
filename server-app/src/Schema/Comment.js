const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  idItem: String,
  nameUser: String,
  avatarUser: String,
  commentUser: String,
});
const comments = mongoose.model("comments", CommentSchema);
module.exports = comments;
