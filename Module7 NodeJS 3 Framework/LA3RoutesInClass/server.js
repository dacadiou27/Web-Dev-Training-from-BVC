var express =require("express");

var app = express();
app.use(express.static(__dirname));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var countrieslist = [
    { code: "CA", country: "Canada" },
    { code: "FR", country: "France" },
    { code: "ENG", country: "England" },
]

//get the messages
app.get("/countrieslist",(req, res) => {
    res.send(countrieslist);
})

//post the messages
app.post("/countrieslist",(req, res) => {
    countrieslist.push(req.body);
   res.sendStatus(200);
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