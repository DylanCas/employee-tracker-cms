-- Needed? How to use?

-- DROP DATABASE IF EXISTS sample_db;
-- CREATE DATABASE sample_db; 

-- USE sample_db;

-- TODO: Implement foreign-primary key biz
CREATE TABLE department {
    id INT,
    name VARCHAR(30)
}

-- TODO: Implement foreign-primary key biz
CREATE TABLE role {
     id INT,
     title VARCHAR(30),
     salary DECIMAL,
     department_id INT
}

-- TODO: Implement foreign-primary key biz
CREATE TABLE employee {
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
}