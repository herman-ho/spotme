const NodeGeocoder = require('node-geocoder');
const models = require('../models');
const locationUtils = {};
const Sequelize = require('sequelize');
const sequelize = new Sequelize('spotme','spotme','spotme', { dialect: 'postgres' });

var options = {
  provider: 'google',
  apiKey: '', // add google maps api key here
}

var gc = NodeGeocoder(options);

locationUtils.geocode = (addr) =>
  gc.geocode(addr)
    .then(function(res) {
      return ([res[0].longitude, res[0].latitude]);
    })
    .catch(function(err) {
      console.log(err);
    });

locationUtils.getInRadius = (lat, long, radius) =>
  sequelize
    .query(
      'select * from public.spaces where st_dwithin(st_setsrid(st_makepoint(:long,:lat),4326)::geography,"coordinatePoint",:radius*1609)',
      { replacements: {lat: lat, long: long, radius: radius}, model: models.space }
    )
    .then((spaces) => {
      return spaces;
    });

module.exports = locationUtils;
