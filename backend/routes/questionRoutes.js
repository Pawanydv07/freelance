const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController'); // Ensure this path is correct

// Route to create a new question
router.post('/questions', questionController.createQuestion);

// Route to get all questions
router.get('/questions', questionController.getAllQuestions);

// Route to get a question by ID
router.get('/questions/:id', questionController.getQuestionById);

// Route to update a question
router.put('/questions/:id', questionController.updateQuestion);

// Route to delete a question
router.delete('/questions/:id', questionController.deleteQuestion);

module.exports = router;
