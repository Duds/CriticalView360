// ./server/models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  uid: { type: String, required: true }, // Store the user's Firebase Auth UID
  bowTieCards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BowTieCard'
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
