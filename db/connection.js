const mysql2 = require("mysql2")

const connection = mysql2.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    password: "Password",

    database: "employee_trackerDB",
});

connection.connect(function(err) {
    if (err) throw err;
});

modular.exports = connection;