var path = require('path');
var fs = require('fs');
var fileLib = require('./fileImportLibrary');

var countryFile = fileLib.getFile(path.join(__dirname, 'country.csv'));
var zoneFile = fileLib.getFile(path.join(__dirname, 'zone.csv'));
var timezoneFile = fileLib.getFile(path.join(__dirname, 'timezone.csv'));

var logFile = "";
logFile += fileLib.getLog(countryFile);
logFile += fileLib.getLog(zoneFile);
logFile += fileLib.getLog(timezoneFile);

//read the log file on console and write it on txt
console.log(logFile);
fs.writeFileSync("log.txt", logFile);

//read 5th country from the list
console.log(countryFile.contents[4]);

//read all country name from the country array 
for (var i = 0; i < zoneFile.contents.length; i++){
    console.log(JSON.stringify(zoneFile.contents[i]));
}




