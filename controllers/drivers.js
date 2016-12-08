var express = require('express');
var Redirect = require('../middlewares/redirect');
var locationUtils = require('../middlewares/locationUtils');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.post('/', Redirect.ifNotLoggedIn(), this.displaySpots);

    return router;
  },
  index(req, res) {
    res.render('drivers');
  },
  displaySpots(req, res) {
    res.send(req.body.latitude + ' ' +req.body.longitude);
  },
};
