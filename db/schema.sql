DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db; 

USE company_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    depName VARCHAR(30),
    PRIMARY KEY(id)
);


CREATE TABLE roles (
     id INT,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INT,
     FOREIGN KEY (department_id) REFERENCES department(id),
     PRIMARY KEY (id)
);


CREATE TABLE employee (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id) REFERENCES employee(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
);
