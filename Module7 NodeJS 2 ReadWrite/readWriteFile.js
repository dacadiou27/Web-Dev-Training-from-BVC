var fs = require("fs"); //access to the path library "js" (file system)

var book2 = require("./book2.json");

console.log(book2);
//output        :   { name: 'JavaScript', author: 'Mike', publishYear: '2020' }

console.log(book2.author);
//output        :   Mike

//fs.readFile(path[, options], callback)
fs.readFile("./book2.json", "utf-8", (error, book2) => {
    var book2 = JSON.parse(book2);  // activate the convertion from JSON object  to JS object
    console.log(book2);
});

// output   without line 12     :
//    {
//    "name" : "JavaScript",
//    "author" : "Mike",
//    "publishYear" :"2020"
//    }

//output    with line 12        :  
//   { name: 'JavaScript', author: 'Mike', publishYear: '2020' }


//fs.readdir(path[, options], callback)
fs.readdir("C:/Users/dacad/Documents/BVC/Web Prog/Assign/Module7TempCon", (error, book3) => {
    console.log(book3);
});
// don't forget to reverse \ to /
//  output  :   [ 'index.js', 'temperatureConverter.js' ] // return an array of the file present


var book4 = {
    name: "C#",
    author: "Eric"
}

//fs.writeFile(file, data[, options], callback)
fs.writeFile("book4.json", JSON.stringify(book4),(error) => {
    console.log("I finished writing to json file.",error);
})
//output        :   I finished writing to json file. null
//output        :   book4.jason file overwritten



var colors = {
    red: "red",
    blue: "blue",
    yellow:"yellow"
}

//fs.writeFile(file, data[, options], callback)
fs.writeFile("colors.json", JSON.stringify(colors),(error) => {
    console.log("I finished writing to json file.",error);
})
//output        :   I finished writing to json file. null
//output        :   colors.jason file created

//type command  :   node readWriteFile.js
