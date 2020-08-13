// search for the file path----------
var path = require('path'); //include path module --------
var fs = require('fs'); //include module ----
var countryFilePath = path.join(__dirname, 'country.csv');
// var zoneFilePath = path.join(__dirname, 'zone.csv');
// var timeZoneFilePath = path.join(__dirname, 'timezone.csv');
    console.log("The path is = " + countryFilePath);
// // console.log(zoneFilePath);
//   console.log(timeZoneFilePath);

// // check if the file exists----------

console.log(fs.existsSync(countryFilePath));
// // console.log(fs.existsSync(zoneFilePath));
// console.log(fs.existsSync(timeZoneFilePath ));

// // // import the files using file system module-----------------

var countryString = fs.readFileSync(countryFilePath).toString();
// var zoneString = fs.readFileSync(zoneFilePath).toString();
// var timeZoneString = fs.readFileSync(timeZoneFilePath).toString() ;

console.log(countryString);
//console.log(zoneString);
//console.log(timeZoneString);//no data display

var countryContents = countryString.split(/\r\n|\n/); // string converted to array
console.log("========================================================================")
console.log(countryContents[1]);
// console.log(countryContents.length);
//execute this code and find out the length of zone file and timeZone file