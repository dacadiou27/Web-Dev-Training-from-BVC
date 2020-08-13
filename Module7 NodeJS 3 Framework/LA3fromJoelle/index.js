//returns function
const express = require('express');
const port = 3000;
//need to invoke returned function from express.
const app = express();

//middleware for whenever the / route sends message will find the ./api file and then execute the returned function
app.use('/', require('./api')());

//calls http object and creates server same as http.createServer
//opens server on port 3000 and waits for request from browser, when request is sent(when browser is opened to local host 3000)
app.listen(port, function () {
    console.log('Listening on port ' + port + '!');
});