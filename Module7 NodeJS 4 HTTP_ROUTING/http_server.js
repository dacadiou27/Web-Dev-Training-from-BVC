// builtin modules  
var http = require("http");  //npm install -s http
var exp =require("express"); //npm install -s express
//var nodemon =require ("nodemon"); //npm install -s nodemon

//One at the time
//http.createServer(requestListener); //requestListner is code that Listenuser request and send

http.createServer(function (req,res){
    // add a HTTP header:
    res.writeHead(200,{"Content-Type" : "text/html"});// you can add many header information, request
    res.write("Hello World \n"); //.Write() canbe called n times & dipslay it on Browser
    res.write("Hi class");
    res.end("Hello World \n"); //.end() can be called only once
    // res.end("Hi class again");
}).listen(8080);
console.log("app listening port 8080")//;


//EX2
//function requestHandler(req,res) {
 //   res.writeHead(200,{"Content-Type" : "text/html"});// you can add many header information, request
 //   res.write("Hello World!"); //.Write() canbe called n times & dipslay it on Browser
//}
//http.createServer(requestHandler).listen(3001);
//console.log("server running on port 3001");




//node .\http_sever.js
//localhost:8080