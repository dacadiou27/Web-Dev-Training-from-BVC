//In Terminal type command : node index.js 

console.log(__dirname);
//C:\Users\dacad\Documents\BVC\Web Prog\Assign\Module7LA2PathModule
console.log(__filename);
//C:\Users\dacad\Documents\BVC\Web Prog\Assign\Module7LA2PathModule\index.js

var path = require("path"); //access to the path library "path"

var lib = require("./ImportedLibrary");

var countryFilePath = path.join(__dirname,"country.csv");
console.log(countryFilePath);
//C:\Users\dacad\Documents\BVC\Web Prog\Assign\Module7LA2PathModule\country.csv
var zoneFilePath=path.join(__dirname,"zone.csv");
console.log(zoneFilePath);
//C:\Users\dacad\Documents\BVC\Web Prog\Assign\Module7LA2PathModule\zone.csv
var timezoneFilePath=path.join(__dirname,"timezone.csv");
console.log(timezoneFilePath);
//C:\Users\dacad\Documents\BVC\Web Prog\Assign\Module7LA2PathModule\timezone.csv



var fs = require("fs"); //access to the path library "js" (file system)
const { Console } = require("console");

//fs.existsSync(path)  --> check if files exist
console.log(fs.existsSync(countryFilePath));  // true
console.log(fs.existsSync(zoneFilePath));  // true
console.log(fs.existsSync(timezoneFilePath));  // true

//fs.readdir(path[, options], callback)
var countryString =fs.readFileSync(countryFilePath).toString();
var zoneString =fs.readFileSync(zoneFilePath).toString();
var timezoneString =fs.readFileSync(timezoneFilePath).toString();

//console.log(countryString);
//console.log(zoneString); //too long
//console.log(timezoneString); //too long

var countryContents = countryString.split(/\r\n|\n/);
console.log(countryContents[38]);  //"CM","Cameroon"
console.log(countryContents.length); //249

// We create a funciton to import all the file for automation
function getFile(fileName){
    var filePath = path.join(__dirname,fileName);
    var fileString;
    var fileLines =[];
    var now = ""; //var now = '';
    var isImported=false;

    if (fs.existsSync(countryFilePath)){
        fileString=fs.readFileSync(filePath).toString();
        now= new Date().toString();
        fileLines = fileString.split(/\r\n|\n/);
        isImported=true;
    }

    return { //object name????
        name : fileName,
        path : filePath,
        numLines : fileLines.length,
        contents : fileLines,
        sucessfulyImported : isImported,
        importeDate : now
    }    
}

var countryFile=getFile("country.csv");
var zoneFile=getFile("zone.csv");
var timeZoneFile=getFile("timezone.csv");

console.log(countryFile.numlines);//249
console.log(zoneFile.numlines);//426
console.log(timeZoneFile.numlines);//181781

//Finally, gather information from the three files and write a log file

function getLog(file){
    var returnValue ="";
    returnValue += "name:" + file.name + "\n";
    returnValue += "num of lines:" + file.numLines + "\n";
    returnValue += "succesfuly imported:" + file.sucessfulyImported + "\n";
    returnValue += "date imported:" + file.importeDate + "\n";

    return returnValue;
}


var logFile="";
logFile += countryFile=getLog(countryFile);
logFile += zoneFile=getLog(zoneFile);
logFile += timeZoneFile=getLog(timeZoneFile);

console.log(logFile);

//Write a log file
//fs.writeFileSync(file, data[, options])
fs.writeFileSync("log.txt",logFile);