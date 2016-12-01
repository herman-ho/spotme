var express = require('express');
var models = require('../models');
var Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifLoggedIn('/profile'), this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('signup');
  },
  submit(req, res) {
    if (req.body.password !== req.body.passwordRetype) {
      req.flash('error', 'Passwords do not match.');
      res.render('signup', { error: req.flash('error') });
    } else {
      models.User.create({
        nameFirst: req.body.nameFirst,
        nameLast: req.body.nameLast,
        email: req.body.email,
        password: req.body.password,
      }).then((user) => {
        req.login(user, () =>
          res.redirect('/profile')
        );
      }).catch(() => {
        res.render('signup');
      });
    }
  },
};
