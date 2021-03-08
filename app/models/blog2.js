const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog2Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technology: { type: String, required: true },
});

module.exports = mongoose.model("Blog2", blog2Schema);
