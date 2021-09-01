USE employee;

INSERT into department (name) VALUES ("Manager");
INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("Accounting");
INSERT into department (name) VALUES ("QA");

INSERT into role (title, salary, department_id) VALUES ("Regional Manager", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales person", 50000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Quality Assurance", 900000, 4);
INSERT into role (title, salary, department_id) VALUES ("Sales person2", 65000, 2);
INSERT into role (title, salary, department_id) VALUES ("Accountant2", 65000, 3);
INSERT into role (title, salary, department_id) VALUES ("Accountant3", 30000, 3);



INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Michael", "Scott", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Dwight", "Schrute", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Halpert", 2, 1);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Oscar", "Martinez", 3, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Angela", "Kinsey", 3, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Kevin", "Malone", 3, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Creed", "Bratton", 4, 1);
