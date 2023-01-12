DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db; 

USE company_db;

-- TODO: Implement foreign-primary key biz
CREATE TABLE department (
    id INT AUTO_INCREMENT,
    depName VARCHAR(30),
    PRIMARY KEY(id)
);


-- TODO: Implement foreign-primary key biz
-- CREATE TABLE role {
--      id INT,
--      title VARCHAR(30),
--      salary DECIMAL,
--      department_id INT
-- }

-- -- TODO: Implement foreign-primary key biz
-- CREATE TABLE employee {
--     id INT,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT,
--     manager_id INT
-- }