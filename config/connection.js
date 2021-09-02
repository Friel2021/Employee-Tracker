const mysql = require("mysql2");
require('dotenv').config();

class Database {
  constructor( config ) {
      this.connection = mysql.createConnection( config );
  }
  query( req, res ) {
      return new Promise( ( resolve, reject ) => {
          this.connection.query( req, res, ( err, rows ) => {
              if ( err ) {
                  console.log(err.sql);
                  console.log("");
                  return reject( err );
              }
              resolve( rows );
          } );
      } );
  }
  close() {
      return new Promise( ( resolve, reject ) => {
          this.connection.end( err => {
              if ( err )
                  return reject( err );
              resolve();
          } );
      } );
  }
}

module.exports = Database;