var express = require('express');
var models = require('../models');
var Redirect = require('../middlewares/redirect');
var sequelize = require('sequelize');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), this.index);

    return router;
  },
  index(req, res) {
    models.reservation.findAll({
      attributes: [
        'id',
        'driverId',
        'carId',
        'ownerId',
        'spaceId',
        'address',
        [sequelize.fn('to_char', sequelize.col('startDate'), 'MM/DD/YYYY'), 'startDate'],
        [sequelize.fn('to_char', sequelize.col('endDate'), 'MM/DD/YYYY'), 'endDate'],
        [sequelize.fn('to_char', sequelize.col('startTime'), 'HH12:MI PM'), 'startTime'],
        [sequelize.fn('to_char', sequelize.col('endTime'), 'HH12:MI PM'), 'endTime'],
        'pricePerHalfHour',
        'createdAt'
      ],
      where: {
        driverId: req.user.id,
      },
    }).then((driverRes) => {
      models.reservation.findAll({
        attributes: [
          'id',
          'driverId',
          'carId',
          'ownerId',
          'spaceId',
          'address',
          [sequelize.fn('to_char', sequelize.col('startDate'), 'MM/DD/YYYY'), 'startDate'],
          [sequelize.fn('to_char', sequelize.col('endDate'), 'MM/DD/YYYY'), 'endDate'],
          [sequelize.fn('to_char', sequelize.col('startTime'), 'HH12:MI PM'), 'startTime'],
          [sequelize.fn('to_char', sequelize.col('endTime'), 'HH12:MI PM'), 'endTime'],
          'pricePerHalfHour',
          'createdAt'
        ],
        where: {
          ownerId: req.user.id,
        },
      }).then((ownerRes) => {
        res.render('reservations', { driverRes, ownerRes });
      });
    }).catch(() => {
      res.redirect('/profile');
    });
  },
};
