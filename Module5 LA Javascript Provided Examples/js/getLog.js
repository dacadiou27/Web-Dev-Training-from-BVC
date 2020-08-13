module.exports = function (file) {
    var returnValue = "";
    returnValue += "name: " + file.name + "\n";
    returnValue += "num of lines: " + file.numLines + "\n";
    returnValue += "successfuly imported: " + file.successfulyImported + "\n";
    returnValue += "date imported: " + file.importedDate + "\n";

    return returnValue;
}
