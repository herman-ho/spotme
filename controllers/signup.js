var express = require('express');
var passport = require('../middlewares/authentication');
var Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    return router;
  },
  index(req, res) {
    res.render('login', { error: req.flash('error') });
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};
