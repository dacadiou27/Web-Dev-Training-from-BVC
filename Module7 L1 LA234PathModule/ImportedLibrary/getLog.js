module.exports = function(file){
    var returnValue ="";
    
    returnValue += "name:" + file.name + "\n";
    returnValue += "num of lines:" + file.numLines + "\n";
    returnValue += "succesfuly imported:" + file.sucessfulyImported + "\n";
    returnValue += "date imported:" + file.importeDate + "\n";

    return returnValue;
}