// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyGoogleToken = require('../config/googleAuth');
require('dotenv').config();

// Register Controller
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
    });

    await user.save();
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Google Auth Controller
exports.googleAuth = async (req, res) => {
  const { token } = req.body;

  try {
    const googleUser = await verifyGoogleToken(token);
    let user = await User.findOne({ email: googleUser.email });

    if (!user) {
      user = new User({
        name: googleUser.name,
        email: googleUser.email,
        googleId: googleUser.sub,
      });
      await user.save();
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Forgot Password Controller
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    user.resetPasswordToken = token;
    user.resetPasswordExpire = Date.now() + 3600000; // 1 hour
    await user.save();

    // Here you can send an email using Firebase or any email service
    // await sendResetEmail(email, token);

    res.status(200).json({ msg: 'Password reset link sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
