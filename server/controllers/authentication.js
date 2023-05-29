// authentication.js

const User = require('../models/user');


const registerUser = async (req, res) => {
  console.log('Received user registration data:', req.body);
  const { username, email, uid } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email address is already in use" });
    }

    const user = new User({
      username,
      email,
      uid, // Store the user's Firebase Auth UID
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('User Registration Error:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
  loginUser
};
