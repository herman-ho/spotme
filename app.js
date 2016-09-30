const express = require('express');
const app = express();
// Load and mount various controllers
const login = require('./controllers/login');
const signup = require('./controllers/signup');
const profile = require('./controllers/profile');
const driver = require('./controllers/driver');
const owner = require('./controllers/owner');

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// Register various routes
app.use('/login', login);
app.use('/signup', signup);
app.use('/profile', profile);
app.use('/driver', driver);
app.use('/owner', owner);

module.exports = app;
app.listen(8000);
