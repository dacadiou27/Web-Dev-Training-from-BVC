//read file
var path = require('path');
var fs = require('fs');

module.exports = function (filePath) {
    var fileName = path.basename(filePath);
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
 