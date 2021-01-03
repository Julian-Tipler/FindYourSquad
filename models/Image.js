const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ImageSchema = new Schema({
  description: {type: String},
  fileLink: {type: String},
  s3_key: {type: String}
}, {
  timestamps: true
})

module.exports = Image = mongoose.model('Image', ImageSchema);
