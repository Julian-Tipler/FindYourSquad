const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);