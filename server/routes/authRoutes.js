// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const admin = require('../utils/firebaseAdmin');

// Route for password reset
router.post('/password-reset', async (req, res) => {
  const { email } = req.body;

  try {
    await resetPassword(email);
    res.status(200).json({ message: 'Password reset email sent successfully.' });
  } catch (error) {
    console.error('Error sending password reset email:', error);
    res.status(500).json({ message: 'Failed to send password reset email. Please try again.' });
  }
});

module.exports = router;
