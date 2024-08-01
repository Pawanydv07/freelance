const passport = require('passport');
const User = require('../models/User');

exports.register = (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    passport.authenticate('local')(req, res, () => {
      res.send('Registered');
    });
  });
};

exports.login = (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      res.send('Logged in');
    });
  })(req, res);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send('Logged out');
  });
};

exports.profile = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send('You need to log in first');
  }
  User.findById(req.user._id).populate('quizzes').exec((err, user) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json(user);
  });
};
