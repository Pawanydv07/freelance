const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

router.post('/quiz', quizController.submitQuiz);

module.exports = router;
