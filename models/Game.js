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



// [["K/D", "number"], "Total Kills", "Level", "Main"]

// Stat

// {
//   "K/D": type: Number, 
// }

// {
//   "K/D": Number, 
// }

// stat.K/D = Number
// type: stat.K/D