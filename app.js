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

connection.connect(function(err) {
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
})
}

function viewAllDepartment() {
  connection.query ("SELECT * FROM departments", function(err, res) {
console.table(res);
start ();
})
}

function viewAllRoles() {
  connection.query("Select roles.*, departments.name FROM roles LEFT JOIN departments ON departments.id = roles.department_id", function (err, res) {
  if (err) throw err;
  console.table(res);
  start();
})
}

function viewAllEmployees() {
  connection.query("SELECT employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP by employees.id",
  function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
  }

function addDepartment() {
  inquirer
  .prompt ([
    {
      type: "input",
      name: "departmentName",
      message: "What department would you like to add?"
    }
  ])
  .then(function(res) {
    console.log(res);
    const query = connection.query(
      "INSERT INTO departments SET ?",
  {
    name: res.departmentName
  },
  function(err, res) {
    connection.query("SELECT * FROM departments", function(err, res){
      console.table(res),
      start();
    })
  }
    )
})
}

function add



