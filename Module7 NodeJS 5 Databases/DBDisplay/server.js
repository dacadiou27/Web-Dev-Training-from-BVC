var express = require("express");

var db = require("./indexplaylist.js");

// require because all information will be  don a JSON file
// npm install body-parser
var bodyParser = require("body-parser");

var app = express();

//use by default the index.html by default
app.use(express.static(__dirname));
//app.use(express.static(__dirname, "indexWithJQuery.html")); //.DO NOT WORK
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server =app.listen(3000,() =>{
    console.log("The serve is listening on port",server.address().port)
});


var fields = ["PlaylistId","Name"];
app.get('/list', function(req,res){
      db.all("SELECT " + fields.join(", ") + " FROM playlists", function(err, rows) {
       if (err) {
           //another way to send error message
           res.status(200).json({"error": err.message});
           return;
       }
       res.json(rows);
    });
});
// node server.js
// http://localhost:3000/
// http://localhost:3000/list