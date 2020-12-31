const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  squadSize: {
    type: String,
    required: true,
  },
  // images: {

  // },
  stats: {
    type: Array,
    default: [],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


module.exports = Game = mongoose.model("Game", GameSchema);