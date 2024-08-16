// routes/auth.js
const express = require('express');
const {
  register,
  login,
  googleAuth,
  forgotPassword,
} = require('../controllers/authController');
const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Google Auth Route
router.post('/google', googleAuth);

// Forgot Password Route
router.post('/forgot-password', forgotPassword);

module.exports = router;
