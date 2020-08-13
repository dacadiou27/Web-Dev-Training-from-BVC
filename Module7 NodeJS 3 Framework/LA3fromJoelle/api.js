//var bodyParser = require('body-parser');
const express = require('express');


module.exports = function () {
    var api = express.Router();

    //when leaving off the route will perform this task for every request, in this case is request is in json will parse the message
    let jsonParser = express.json();

    //will respond to any get request from browser sent from home url and send response provided
    api.get('/', function (req, res) {
        //will look at what is sending and add the appropriate writeHead
        res.send('Hello World!');
    });
    
    //empty array to add received messages
    let messages = [];
    //will respond to any post request from browser sent from /country url and send response 
    //to view need to go to postman and add post.
    api.post('/country', jsonParser, function (req, res) {
        //will add recieved message from browser to array as new object
        messages.push(req.body);
        //console log the new message array
        console.log(messages);
        //send response to browser with country code and name as json object
        res.json({ code: req.body.code, name: req.body.name });
    });

     //will respond to any post request from browser sent from /country url and send response 
    api.delete('/country', jsonParser, function (req, res) {
        //will find request code to be deleted and remove it from message array
        messages.splice(messages.findIndex(e => e.code === req.body.code), 1);
        console.log(messages)
        // will send response to browser that country code has been deleted
        res.send("Country "+req.body.code+" has been deleted");
    })

    return api;
}