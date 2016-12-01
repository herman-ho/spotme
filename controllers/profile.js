var express = require('express');
var Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);

    return router;
  },
  index(req, res) {
    res.render('profile', { user: req.user, success: req.flash('success') });
  },
};
