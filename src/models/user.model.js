const mongoose = require("mongoose");
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  avatarUrl: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;