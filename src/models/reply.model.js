const mongoose = require("mongoose");
// const { Schema } = mongoose;
const Schema = mongoose.Schema;
const User = require("./user.model.js");
const Thread = require("./thread.model.js");

const replySchema = new Schema({
  replyContent: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  threadId: { type: Schema.Types.ObjectId, ref: "Thread" },
});

const Reply = mongoose.model("Reply", userSchema);

module.exports = Reply;
