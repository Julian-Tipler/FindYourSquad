const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SquadSchema = new Schema({
  leader: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: false,
  },
  generalBio: {
    type: String,
    required: false,
  },
  // game: {
  //   type: String,
  //   required: true,
  //make a reference to games collection
  // },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],  
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },

});



module.exports = Squad = mongoose.model('squad', SquadSchema);