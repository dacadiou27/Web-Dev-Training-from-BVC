var fpath = require('path');//to get the file from where it is saved
var fs = require('fs');//file system to access the data

//function to return the details about the file
function getFile(fileName) {
    var filePath = fpath.join(__dirname, fileName);
    var fileString;
    var fileLines = [];
    var now = '';
    var isImported = false;

    if (fs.existsSync(fileName)) {
        fileString = fs.readFileSync(filePath).toString();
        now = new Date().toString();
        fileLines = fileString.split(/\r\n|\n/);
        isImported = true;
    }

    return {
        name: fileName,
        path: filePath,
        numLines: fileLines.length,
        contents: fileLines,
        successfulyImported: isImported,
        importedDate: now
    }
}

var countryFile = getFile('country.csv');
// var zoneFile = getFile('zone.csv');
// var timezoneFile = getFile('timezone.csv');

 console.log(countryFile.path);
// console.log(zoneFile.numLines)
// console.log(zoneFile.importedDate );




//-This log file is independent of importing function---------------------------------------
 function getLog(file) {
    var returnValue = "";
    returnValue += "name: " + file.name + "\n";
    returnValue += "num of lines: " + file.numLines + "\n";
    returnValue += "successfuly imported: " + file.successfulyImported + "\n";
    returnValue += "date imported: " + file.importedDate + "\n";

    return returnValue;
}

var logFile = "";
logFile += getLog(countryFile);//countryFile is imported by getFile method
// logFile += getLog(zoneFile);
// logFile += getLog(timezoneFile);
//console.log(logFile);
fs.writeFileSync("log.txt", logFile);//it create log.txt file in the working dir

 