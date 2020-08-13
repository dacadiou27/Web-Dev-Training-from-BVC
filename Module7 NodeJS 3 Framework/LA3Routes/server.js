var express =require("express");

var app = express();
//var app = express.Router();

app.use(express.static(__dirname));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//create an object which wil store the list
var countrieslist = [
    { code: "CA", country: "Canada" },
    { code: "FR", country: "France" },
    { code: "ENG", country: "England" },
]

//get the messages
// in browser (google Chrome) type http://localhost:3000/countrieslist
app.get("/countrieslist",(req, res) => {
    res.send(countrieslist);
})

//post the messages
app.post("/countrieslist",(req, res) => {
    countrieslist.push(req.body);
   res.sendStatus(200);
})

app.delete("/countrieslist", (req, res) => {
    //will find request code to be deleted and remove it from countrieslist
    // In Postman 
    // selected DELETE and http://localhost:3000/countrieslist
    // Key set to "code"       VALUE set to "FR"
    console.log("***********");
    console.log(countrieslist);  
    console.log("***********");
    //console.log(req);
    //console.log(req.body);
    //console.log(req.params);
    //console.log(req.param);
    //console.log(req.key);
    //console.log(req.value);
    //console.log(req.param.key);
    //console.log(req.param.code);
    console.log(req.query);
    console.log("***********");
    var index = countrieslist.findIndex(e => e.code == req.query.code); 
    //var index = countrieslist.findIndex(e => e.code === "FR"); //return 1 --> WORKS
    console.log(index);
    countrieslist.splice(index,1);
    console.log(countrieslist);
   //countrieslist.splice(countrieslist.findIndex(e => e.code === req.query.code), 1);
   // will send response to browser that country code has been deleted
   res.send("Country "+ req.query.code+" has been deleted");
   console.log("Country "+ req.query.code+" has been deleted");
})

//set the port server
var server = app.listen(3000,() =>{
    console.log("My server is listening on the port", server.address().port)
})

// open in integrated terminal
// in console : npm install -s body-parser (optional if already done)
// in console : nodemon ./server.js
// install postman from web and open it and set it on POST & http://localhost:3000 and click on Send
// in browser (google Chrome) type http://localhost:3000
// in browser (google Chrome) type http://localhost:3000/countrieslist