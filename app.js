const inquirer = require ("inquirer");
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database

const db = mysql.createConnection({
  host: "localhost",

  port: "3001",

  user: "root",

  password: "Password",

  database: "employee_db"

})

const PORT = process.env.PORT || 3001;



// Connect to database


// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});