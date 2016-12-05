const NodeGeocoder = require('node-geocoder');
const geocoder = {}

var options = {
  provider: 'google',
  apiKey: '', // add google maps geocode api key here
}

var gc = NodeGeocoder(options);

geocoder.geocode = (addr) =>
  gc.geocode(addr)
    .then(function(res) {
      return ([res[0].longitude, res[0].latitude]);
    })
    .catch(function(err) {
      console.log(err);
    });

module.exports = geocoder;
