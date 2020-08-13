var express =require("express");
var bodyParser=require("body-parser");
var port =3000;

// to add without body-parser
// in Shell : node index.js
// set postman on Post
// ckeck   http://localhost:3000/   --> should get "Hello World!"
// code to  activate :

//LA1
//var app =  express().use(function(req,res){
//    res.send('Hello World! '); });


//LA2
// to add with body-parser
var app =  express().use(bodyParser.json())
    .use(function(req,res){

        if (req.body.message){
            res.send('Hello from ' + req.body.message);  
       }
       else {
            res.send('Hello World!');
        }
    });
//


//LA3
//var app =  express();
//app.use('/', require('./api')());
//

//app.listen(port,function(){
    console.log('Listening on port ' + port + "!");
//});

//or in the browser
// ckeck:  http://localhost:3000/ -H "content-type: application/json" -d "{\"message\":\"SODV3201\"}"
// -H ,--header <header/@file> Pass custom header(s) to server(Sends headers)
//-d, --data <data> HTTP POST data (Sends the specifieds data) 
        // return Hello World!

//or in cmd windows do  or in shell
//      cd Documents\BVC\Web Prog\Assign\Module7 NodeJS 3 Framework\LA1HelloWorld
//      node index.js
        // return Listening on port 3000!
//or
//      node index.js -H "content-type: application/json" -d "{\"message\":\"SODV3201\"}" 
        // return Listening on port 3000!

//or using curl
// in the command window go to C:\Users\dacad\Documents\BVC\Web Prog\curl-7.71.1-win64-mingw\bin
//curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"message\":\"SODV3201\"}"
        // return Hello from SODV3201

//curl http://127.0.0.1:3000/country/ -X POST -H "content-type: application/json" -d "{\"code\":\"XYZ\", \"name\":\"TestCountry\"}"
//curl http://127.0.0.1:3000/country/ -X DELETE -H "content-type: application/json" -d "{\"code\":\"XYZ\", \"name\":\"TestCountry\"}"

//curl http://127.0.0.1:3000/country/ -X POST -H "content-type: application/json" -d "{\"code\":\"XYZ\", \"name\":\"TestCountry\"}" {"sucess":true,"status":"Country is added","countryId":252}
//curl http://127.0.0.1:3000/country/ -X DELETE -H "content-type: application/json" -d "{\"code\":\"XYZ\", \"name\":\"TestCountry\"}" {"sucess":true,"status":"Country is added","countryId":252}


//or using postman
// POST localhost:3000     // return Hello World!
