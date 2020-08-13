var path = require("path"); //access to the path library "path"
var fs = require("fs"); //access to the path library "js" (file system)

var ImportedLibrary = require("./ImportedLibrary");// go in the directory "ImportedLibrary" and read the index.js file which load the 2 other files

var countryFile = ImportedLibrary.getFile(path.join(__dirname,"country.csv"));
var zoneFile = ImportedLibrary.getFile(path.join(__dirname,"Zone.csv"));
var timeZoneFile = ImportedLibrary.getFile(path.join(__dirname,"timezone.csv"));

var logFile ="";

logFile += ImportedLibrary.getLog(countryFile);
logFile += ImportedLibrary.getLog(zoneFile);
logFile += ImportedLibrary.getLog(timeZoneFile);

console.log(logFile);
fs.writeFileSync("log.txt",logFile);

//to create a Jason package
//in command terminal npm init