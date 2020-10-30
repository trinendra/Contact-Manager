var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const contactSchema = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String },
  last_name: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  times: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
