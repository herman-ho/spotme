var express = require('express');
var Redirect = require('../middlewares/redirect');
var locationUtils = require('../middlewares/locationUtils');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.get('/available-spaces', Redirect.ifNotLoggedIn(), Redirect.ifLoggedIn('/drivers'), this.displaySpots);
    router.post('/available-spaces', Redirect.ifNotLoggedIn(), this.displaySpots);

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
              res.render('drivers/available-spaces', { spaces });
            } else {
              req.flash('error', 'No spaces found.');
              res.render('drivers', { error: req.flash('error') });
            }
          }).catch(() => {
            res.redirect('/drivers');
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
          res.render('drivers/available-spaces', { spaces });
        } else {
          req.flash('error', 'No spaces found.');
          res.render('drivers', { error: req.flash('error') });
        }
      }).catch(() => {
        res.redirect('/drivers');
      });
    }
  },
};
