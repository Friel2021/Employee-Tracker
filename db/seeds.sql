INSERT INTO department (name)
VALUES ("Regional Manager"), ("Sales"), ("Accounting");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, NULL), ("Dwight", "Shrute", 2, 3), ("Oscar", "Martinez", 2, 3);

INSERT INTO role (title, salary, department_id);
VALUES ("Manager", 150000, 1), ("Sales Rep", 100000, 2,) ("Accountant", 95000, 3);