var path = require("path"); //access to the path library "path"
var fs = require("fs"); //access to the path library "js" (file system)

module.exports = function (filePath) {
    var fileName = path.basename(filePath);
    var fileString;
    var fileLines = [];
    var now = "";
    var isImported = false;

    if (fs.existsSync()) {
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
        successfullyImported: isImported,
        importedDate: now
    }
}