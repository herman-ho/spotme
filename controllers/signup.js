var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
    console.log('Signup Controller :: Time: ', Date.now());
    next();
});

// define the root signup route
router.get('/', function(req, res) {
    res.send('Signup page');
});

module.exports = router;
