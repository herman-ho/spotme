const NodeGeocoder = require('node-geocoder');
const models = require('../models');
const locationUtils = {}

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

module.exports = locationUtils;
