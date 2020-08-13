// builtin modules  
var http = require("http");  //npm install -s http
var fancyHTML = "<!DOCTYPE html><html><head><title>http server</title></head><body> <h1 style='color:red'>I am from HTML page</h1></body></html>";

var Server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-length': fancyHTML.length, 'content-type': 'text/html' });
    //response.write("This is a message that is hard coded.")
    response.end(fancyHTML);
    //response.end("msg"); // need to end the message response

});

Server.listen(3000);

console.log("Listening port 3000");

// node index.js
//Check http://localhost:3000/
