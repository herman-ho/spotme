const express = require('express');
const app = express();
// Load and mount various controllers
const login = require('./controllers/login');
const signup = require('./controllers/signup');
const profile = require('./controllers/profile');
const drivers = require('./controllers/drivers');
const owners = require('./controllers/owners');

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
app.use('/drivers', drivers);
app.use('/owners', owners);

module.exports = app;
app.listen(8000);
