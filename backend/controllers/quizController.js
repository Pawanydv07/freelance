const Quiz = require('../models/Quiz');
const User = require('../models/User');

exports.submitQuiz = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('You need to log in first');
  }
  const { title, questions, score } = req.body;
  const quiz = new Quiz({
    title,
    questions,
    user: req.user._id,
    score,
  });
  quiz.save((err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    User.findById(req.user._id, (err, user) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      user.quizzes.push(quiz);
      user.save((err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send('Quiz submitted');
      });
    });
  });
};
