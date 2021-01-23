const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Game = require('./Game')

const MessageSchema = new Schema({
    squad: {
        type: String,
        required: true,
        ref: "Squad",
    },
    sender: {
        type: String,
        required: true,
        ref: "User",
    },
    content: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


const SquadSchema = new Schema({
  leader: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
      ref: "User",
      unique: true,
    },
  ],  
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game",
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
  squadSize: {
    type: Number,
    required: true
  },
  squadFull: {
    type: Boolean,
    required: true,
    default: false
  },
  messages: [MessageSchema],
});

module.exports = Squad = mongoose.model('Squad', SquadSchema);

