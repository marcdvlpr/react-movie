const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false
  },
  avatar: {
    type: String
  }
});

const User = model('User', userSchema);

module.exports = User;
