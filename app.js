const inquirer = require ("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
const ctable = require('console.table');

// Connect to database

const connection = mysql.createConnection({
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
      "View all Departments",
      "View all Roles",
      "View all Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update Employee Role",
      "Exit"
    ]
  }
])
.then(function(res) {
  switch (res.start){

    case "View all Deparments":
    viewAllDepartment();
    break;

    case "View all Roles":
    viewAllRoles();
    break;

    case "View all Employees":
    viewAllEmployees();
    break;

    case "Add a Department":
    addDepartment();
    break;

    case "Add a Role":
    addRole();
    break;

    case "Add an Employee":
    addEmployee();
    break;

    case "Update Employee Role":
    updateEmployeeRole();
    break;
  }
}
