// builtin modules  
var http = require("http");  //npm install -s http
var fancyHTML1 = "<!DOCTYPE html><html><head><title>http server</title></head><body> <h1 style='color:red'>I am wrinting from HTML page</h1><h2 style='color:yellow'>This is new to me</h2><h3 style='color:blue'>I hope it works</h3></body></html>";

var string = "Try to add using write";

var fancyHTML2 = "<!DOCTYPE html><html><head></head><body> <h2 style='color:yellow'>This is new to me</h2></body></html>";
var fancyHTML3 = "<!DOCTYPE html><html><head></head><body> <h3 style='color:blue'>I hope it works</h3></body></html>";

var Server = http.createServer(function (request, response) {

    response.writeHead(200, { 'content-length': fancyHTML1.length+fancyHTML2.length+string.length , 'content-type': 'text/html' });
    response.write(fancyHTML2);
    response.write(fancyHTML1);

    response.end(string);
    

});

Server.listen(3010);

console.log("Listening port 3010");

// node index2.js
//Check http://localhost:3010/
