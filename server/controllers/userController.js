const User = require('../models/user');

const registerUser = async (req, res) => {
  console.log('Received user registration data:', req.body);
  const { username, email, password, uid } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      username,
      email,
      password, // Store the password directly
      uid, // Store the user's Firebase Auth UID
    });

    await user.save();

    console.log('User registered:', user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('User Registration Error:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
};
