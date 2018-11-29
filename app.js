//const yargs = require('yargs');

//const geocode = require('./geocode/geocode.js');

//const argv = yargs
  //.options({
    //a: {
      //demand: true,
      //alias: 'address',
      //describe: 'Address to fetch weather for',
      //string: true
    //}
  //})

  //.help()
  //.alias('help', 'h')
  //.argv;

//geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  //if(errorMessage) {
    //console.log(errorMessage);
  //} else {
    //console.log(JSON.stringify(results, undefined, 2));
  //}
//});

// 4d095d7c54f67904eae8d3dbf50e8543

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/4d095d7c54f67904eae8d3dbf50e8543/43.126462,-70.92288',
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
