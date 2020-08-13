var fs = require('fs');//require fs module
var path = require("path");
//sample js object
var StudentJS = { students:
    [ { name: 'John', age: '30', profession: 'IT', city: 'ca' },
      { name: 'Rani', age: '38', profession: 'Programmer', city: 'ca' },
      { name: 'Sami', age: '32', profession: 'IT', Researcher: 'ca' },
      { name: 'Tanya', age: '38', profession: 'IT', Student: 'ca' } ],
   Teachers: [ {}, {}, {} ] }

////Access particular object values

// console.log(StudentJS.students[2].name); //Sami
// console.log (StudentJS.students[1]); //{ name: 'Rani', age: '38', profession: 'Programmer', city: 'ca' }
// console.log(StudentJS.students[3].name + " " + StudentJS.students[3].profession)//Tanya IT

// //convert js object to JSON data format
// console.log("JS object converted to JSON format");
// console.log("===================================")
// console.log(JSON.stringify(StudentJS ));

// //Create JSON file using fs method
// fs.writeFileSync("mydata.json", JSON.stringify(StudentJS));
// console.log("\n mydata.json file created \n");
// //console.log(" ");

// // //Read the file back
//  var data = fs.readFileSync('mydata.json','utf-8');
// console.log("JSON data read from file");
// console.log("===========================")
// console.log(data);//JSON format

// //Convert JSON format to JS object
// var word = JSON.parse(data);
// console.log("JS object");
// console.log("============");
// console.log(word);

//  // create a new json file and create a js objectto copy based on the example above

 //Check file path
 var mydata_path = path.join(__dirname, 'mydata.json');
 console.log("mydata.json file path is ")
 console.log("========================")
 console.log(fs.existsSync(mydata_path));//check and print if it exist

//  //Excercies
//  //listen the lecture and exprment the code
//  //Make your own JSON data or JS data and work on it using fs and path module 
//  //Read fs and path module documenation when time allows

