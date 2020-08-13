var bodyParser=require("body-parser");
var express =require("express");


module.exports= function () {
    var api =express.Router();
    api.use(bodyParser.json());

    api.get('/', function (req,res){
            res.send('Hello World!');
    });
    return api;
}

