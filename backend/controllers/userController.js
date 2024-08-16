const User = require('../models/User');

// Create or update a user profile
exports.upsertProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true, upsert: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user profile by Firebase ID
exports.getProfileByFirebaseId = async (req, res) => {
  try {
    const user = await User.findOne({ firebaseId: req.params.firebaseId });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user profile by ID
exports.getProfileById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
