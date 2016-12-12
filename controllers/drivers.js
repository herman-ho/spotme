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
    if ((!req.body.latitude || !req.body.longitude) && req.body.destination) {
      locationUtils.geocode(
        req.body.destination
      ).then((point) => {
        if (point.length > 1) {
          locationUtils.getInRadius(
            point[1], point[0], req.user.id, 0.5
          ).then((spaces) => {
            if (spaces.length > 0) {
              res.send(spaces);
            } else {
              req.flash('error', 'No spaces found.');
              res.render('drivers', { error: req.flash('error') });
            }
          }).catch(() => {
            res.render('drivers');
          });
        } else {
          req.flash('error', 'Destination not found.');
          res.render('drivers', { error: req.flash('error') });
        }
      });
    } else {
      locationUtils.getInRadius(
        req.body.latitude, req.body.longitude, req.user.id, 0.5
      ).then((spaces) => {
        if (spaces.length > 0) {
          res.send(spaces);
        } else {
          req.flash('error', 'No spaces found.');
          res.render('drivers', { error: req.flash('error') });
        }
      }).catch(() => {
        res.render('drivers');
      });
    }
  },
};
