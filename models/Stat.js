const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Game = require('./Game')


const StatSchema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  stats: {
    type: Object,
    required: false,    
  }
});


module.exports = Stat = mongoose.model("Stat", StatSchema);