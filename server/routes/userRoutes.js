// ./server/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, getUserDataByUID } = require('../controllers/userController');
const { sendPasswordResetEmail } = require('../controllers/authentication');
const authRoutes = require('./authRoutes');

router.post('/register', registerUser);
router.get('/:uid', getUserDataByUID);
router.post('/password-reset', sendPasswordResetEmail); // Add this line for the password reset route
router.use('/auth', authRoutes); // Use the authRoutes

module.exports = router;
