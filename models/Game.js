const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  squadSize: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: false,
    },
  ],
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
