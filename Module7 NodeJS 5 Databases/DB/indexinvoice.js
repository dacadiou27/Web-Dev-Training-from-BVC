var sqlite3 = require('sqlite3').verbose();
var fs = require("fs"); //access to the path library "js" (file system)

let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE,(err) => {
        if (err) {
          console.error(err.message);
        }     
        console.log('Connected to the chinook database.');
      });

      db.serialize(() => { // between the backward "`" quote it is SQL language
          db.each(`SELECT InvoiceLineId as line, 
                    InvoiceId as id, 
                    TrackId as trackid, 
                    UnitPrice as unitprice ,
                    Quantity as quantity 
          FROM Invoice_items`, (err, row) => {
            if (err) {
                console.error(err.message);
              }
              //console.log(row.line + "\t" + row.id + "\t" + row.trackid+ "\t" + row.unitprice+ "\t" + row.quantity);

              //fs.writeFile(file, data[, options], callback)
              //fs.writeFile("index_invoice.html",row.line + "\t" + row.id + "\t" + row.trackid+ "\t" + row.unitprice+ "\t" + row.quantity,(error) => {
                fs.appendFile("./index_invoice.html","line :" + row.line + "\t" +  "id :" +row.id + "\t" + "track id :"+ row.trackid+ "\t" +"unit price"+ row.unitprice+ "\t" + "quantity :"+row.quantity + "\n",(error) => {
                console.log("I finished writing to file.",error);
              })

          });
      });
      db.close((err) => {
        if (err) {
            console.error(err.message);
          }
          console.log("The connection to the database has been closed.")
      });
   
      //node indexinvoice.js

