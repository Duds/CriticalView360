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
      uid,
    });

    await user.save();

    console.log('User registered:', user);

    res.status(201).json({ message: "User registered successfully", user: { uid: user.uid, username: user.username } });
  } catch (error) {
    console.error('User Registration Error:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getUserDataByUID = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await User.findOne({ uid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
  getUserDataByUID,
};
