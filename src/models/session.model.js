const mongoose = require("mongoose");
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
