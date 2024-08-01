const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [{
    question: String,
    options: [String],
    answer: String,
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  score: Number,
});

module.exports = mongoose.model('Quiz', QuizSchema);
