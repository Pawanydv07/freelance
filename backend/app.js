const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const connectDB = require('./config/db');
// const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questionRoutes');
// const userRoutes = require('./routes/UserRoutes'); // Ensure correct import

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
// app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
// app.use('/api/users', userRoutes); // Ensure this is correctly used

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
