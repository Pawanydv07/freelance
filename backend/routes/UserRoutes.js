const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create or update user profile
router.post('/profiles/:id', userController.upsertProfile);

// Get user profile by Firebase ID
router.get('/profiles/firebase/:firebaseId', userController.getProfileByFirebaseId);

// Update user profile
router.put('/profiles/:id', userController.updateProfile);

// Get user profile by ID
router.get('/profiles/:id', userController.getProfileById);

module.exports = router;
