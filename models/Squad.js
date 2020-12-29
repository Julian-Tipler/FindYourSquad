const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SquadSchema = new Schema({
  leader: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  generalBio: {
    type: String,
    required: false,
  },
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
  game: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
  squadSize: {
    //change to Number
    type: String,
    required: true
  },
  
  // game: {
  //   type: String,
  //   required: true,
  //make a reference to games collection
  // },

});



module.exports = Squad = mongoose.model('squad', SquadSchema);