var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
    console.log('Driver Controller :: Time: ', Date.now());
    next();
});

// define the root driver route
router.get('/', function(req, res) {
    res.send('Driver page');
});

// define the driver reservation route
router.get('/reserve', function(req, res) {
    res.send('Driver reservation page');
});

module.exports = router;
