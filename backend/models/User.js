const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
  name: { type: String },
  score: { type: Number },
  designation: { type: String },
  location: { type: String },
  linkedin: { type: String },
  bio: { type: String },
  additionalDetails: { type: Map, of: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
