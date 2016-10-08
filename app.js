var express = require('express');
var app = express();
// Load and mount various controllers
var login = require('./controllers/login');
var signup = require('./controllers/signup');
var profile = require('./controllers/profile');
var drivers = require('./controllers/drivers');
var owners = require('./controllers/owners');

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
