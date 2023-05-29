const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  uid: { type: String, required: true },
  bowTieCards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BowTieCard'
    }
  ]
});

const User = mongoose.model('User', UserSchema);

const registerUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  User,
  registerUser
};

