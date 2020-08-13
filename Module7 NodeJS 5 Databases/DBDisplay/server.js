var express = require("express");

var db = require("./indexplaylist.js");

// require because all information will be  don a JSON file
// npm install body-parser
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server =app.listen(3000,() =>{
    console.log("The serve is listening on port",server.address().port)
});


var fields = ["PlaylistId","Name"];
//app.get("/list", function(req,res){
app.get('/list', function(req,res){
      db.all("SELECT " + fields.join(", ") + " FROM playlists", function(err, rows) {
    //db.all("SELECT" + fields.join(", ") + "FROM playlists", function(err,rows){ // carefull about the spaces after SELECT and begore FROM
       if (err) {
           //another way to send error message
           res.status(200).json({"error": err.message});
           return;
       }
       res.json(rows);
    });
});
// http://localhost:3000/
// http://localhost:3000/list