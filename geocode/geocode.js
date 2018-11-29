const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address, callback);


  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=uuTltY0BG2CHeJgUkWzPEHHAlW3GzZyW&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
      callback('Unable to find that address.');
    } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;