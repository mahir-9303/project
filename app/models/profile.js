const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  avatar: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  description: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  areaofexpertise: { type: String },
  contact: { type: String },
  accno: { type: String },
});

module.exports = mongoose.model("Profile", profileSchema);
