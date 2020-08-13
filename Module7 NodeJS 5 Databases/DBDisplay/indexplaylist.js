var sqlite3 = require('sqlite3').verbose();
var http = require('http');  //npm install -s http

let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE,(err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the chinook database.');
      });

      db.serialize(() => { // between the backward "`" quote it is SQL language
          db.each(`SELECT PlaylistId as id, 
          Name as name 
          FROM playlists`, (err, row) => {
            if (err) {
                console.error(err.message);
              }
              console.log(row.id + "\t" + row.name);
          });
      });

      // Commented because we want to keep the connection open during the display
      //db.close((err) => {
      //  if (err) {
      //      console.error(err.message);
      //    }
      //    console.log("The connection to the database has been closed.")
      //});


      // Want to export the database creation
      module.exports = db;

         //node indexplaylists.js