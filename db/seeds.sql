INSERT INTO departments (name)
VALUES ("Regional Manager"), ("Sales"), ("Accounting");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 2), ("Dwight", "Shrute", 2, 1,), ("Oscar", "Martinez", 3, 2);

INSERT INTO roles (title, salary, department_id);
VALUES ("Manager", 500, 1,) ("Sales Rep", 150, 2,) ("Accountant", 185, 3);