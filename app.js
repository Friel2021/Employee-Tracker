const inquirer = require ("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
const consoleTable = require("console.table");

// Connect to database

const db = mysql.createConnection({
  host: "localhost",

  port: "3306",

  user: "root",

  password: "Password",

  database: "employee_db"

});

db.connect(function(err) {
if (err) throw err;
console.log("connected as id " + db.threadID + "\n");
  start();
});

function start () {
inquirer
.prompt ([
  {
    type: "List",
    message: "Please select an option",
    name: "start",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update employee role",

    ]








  }





])


}