const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SquadSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: { 
    type: String, 
    required: false 
  },
  generalBio: {
    type: String,
    required: false },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Squad = mongoose.model('squad', SquadSchema);