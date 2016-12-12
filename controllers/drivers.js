var express = require('express');
var models = require('../models');
var Redirect = require('../middlewares/redirect');
var locationUtils = require('../middlewares/locationUtils');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);
    router.get('/available-spaces', Redirect.ifNotLoggedIn(), Redirect.ifLoggedIn('/drivers'));
    router.post('/available-spaces', Redirect.ifNotLoggedIn(), this.displaySpots);
    router.get('/available-spaces/:id/confirm-reservation', Redirect.ifNotLoggedIn(), this.confirm);
    router.get('/reserve', Redirect.ifNotLoggedIn(), Redirect.ifLoggedIn('/drivers'));
    router.post('/reserve', Redirect.ifNotLoggedIn(), this.reserve);

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
  confirm(req, res) {
    models.space.findOne({
      where: {
        userId: {
          $ne: req.user.id,
        },
        id: req.params.id,
      },
    }).then((space) => {
      res.render('drivers/confirm-reservation', { space });
    }).catch(() => {
      res.redirect('/drivers');
    });
  },
  reserve(req, res) {
    models.reservation.create({
      driverId: req.user.id,
      carId: null,
      ownerId: req.body.ownerId,
      spaceId: req.body.spaceId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      pricePerHalfHour: req.body.pricePerHalfHour,
    }).then((reservation) => {
      res.redirect('/drivers');
    }).catch(() => {
      res.redirect('/drivers');
    });
  },
};
