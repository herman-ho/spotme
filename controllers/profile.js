var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
    console.log('Profile Controller :: Time: ', Date.now());
    next();
});

// define the root profile route
router.get('/', function(req, res) {
    res.send('Profile page');
});

// define the profile reservation route
router.get('/edit', function(req, res) {
    res.send('Edit profile page');
});

module.exports = router;
