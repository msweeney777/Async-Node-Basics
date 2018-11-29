const request = require('request');

var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);


  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=uuTltY0BG2CHeJgUkWzPEHHAlW3GzZyW&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Google servers.');
    } else if (body.results[0].locations[0].geocodeQualityCode === 'A1XAX') {
      console.log('Unable to find that address.');
    } else if (body.results[0].locations[0].geocodeQualityCode != 'A1XAX') {
    console.log(`Address: ${body.results[0].providedLocation.location}`);
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
