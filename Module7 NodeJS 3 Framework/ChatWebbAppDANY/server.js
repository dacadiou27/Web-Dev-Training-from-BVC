var express =require("express");

var app = express();
app.use(express.static(__dirname));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



//create an object which wil sote the message
var messages = [
    { name: "Hana", message: "Hi!" },
    { name: "Tom", message: "Welcome !" }
]

//get the messages
// in browser (google Chrome) type http://localhost:3000/messages
app.get("/messages",(reques, responc) => {
    responc.send(messages);
})

//post the messages
app.post("/messages",(reques, responc) => {
    messages.push(reques.body);
    responc.sendStatus(200);
})

//set the port server
var server = app.listen(3000,() =>{
    console.log("My server is listening on the port", server.address().port)
})

// open in integrated terminal
// in console : npm install -s body-parser (optional if already done)
// in console : nodemon ./server.js
// install postman from web and open it and set it on POST and click on Send
// in browser (google Chrome) type http://localhost:3000
// in browser (google Chrome) type http://http://localhost:3000/messages