const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
});

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=uuTltY0BG2CHeJgUkWzPEHHAlW3GzZyW&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
});
