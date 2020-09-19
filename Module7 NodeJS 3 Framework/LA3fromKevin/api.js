var bodyParser = require('body-parser');
var express = require('express');
// read in country.csv file
var fs = require('fs'); // node file system module
var path = require('path'); // node utility for working with file and directory paths
var countryFilePath = path.join(__dirname, 'country.csv'); // path
var countryString = fs.readFileSync(countryFilePath).toString(); // import to string
var countryContents = countryString.split(/\r\n|\n/); // split into array by return+newline or by newline
console.log("Countries: " + countryContents.length); // number of countries (252)
module.exports = function () {
    var api = express.Router();
    api.use(bodyParser.json());
    api.get('/', function (req, res) {
        res.send('Hello World!');
    });
    api.post('/country', function (req, res) {
        if (Object.values(req.body).length == 0) { // no argument
            res.send('Hello ' + countryContents[38].split(',')[1].replace(/"/g,'') + '!');
        } else {
            var num = countryContents.push(req.body); // add new country, get new index
            res.send({"success":true,"status":"Country is added","countryId":num});
        }
    });
    api.delete('/country', function (req, res) {
        if (Object.values(req.body).length == 0) {
            res.send('Hello ' + countryContents[38].split(',')[1].replace(/"/g,'') + '!');
        } else {
            res.send({"success":true,"data":req.body});
        }
    })
    return api;
}