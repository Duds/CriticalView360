// ./server/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, getUserDataByUID } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/:uid', getUserDataByUID);

module.exports = router;
