const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Stat = require('./Stat')
const Squad = require('./Squad')


const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  platform: { 
    type: String, 
    required: false
  },
  communityRating: { 
    type: Number, 
    required: false 
  },
  bio: { 
    type: String, 
    required: false 
  },
  profileImages: [
    {
      type: String,
      required: false
    },
  ],
  userStats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stat",
    },
  ],
  squads: [
    {
      type: Schema.Types.ObjectId,
      ref: "Squad"
    }
  ]
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
