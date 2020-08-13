var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('ab.db', (err) => { //if doesn't exit it will create it
        if (err) {
          return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
      });

      db.close(); // Nedd to close the database

       //node indexab.js