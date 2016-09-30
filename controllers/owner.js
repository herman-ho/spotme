var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
    console.log('Owner Controller :: Time: ', Date.now());
    next();
});

// define the root owner route
router.get('/', function(req, res) {
    res.send('Owner page');
});

// define the owner listings route
router.get('/listings', function(req, res) {
    res.send('Owner Listings page');
});

// define the owner new listing route
router.get('/listings/new', function(req, res) {
    res.send('Owner new listing page');
});

// define the specific listing route
router.get('/listings/:listId', function(req, res) {
  res.send('This is listing: ' + req.params.listId);
});

// define the specific listing  edit route
router.get('/listings/:listId/edit', function(req, res) {
  res.send('Editing listing: ' + req.params.listId);
});

module.exports = router;
