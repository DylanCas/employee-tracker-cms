INSERT INTO department (depName)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
        
INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Sales Person", 80000, 1),
       (3, "Lead Engineer", 150000, 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 160000, 3),
       (6, "Accountant", 125000, 3),
       (7, "Legal Team Lead", 250000, 4),
       (8, "Lawyer", 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "JD", "McLane", 1, null),
       (2, "Jonathan", "Rees", 2, 1),
       (3, "Dylan", "Casabona", 3, null),
       (4, "Kirk", "Newkirk", 4, 3),
       (5, "Lauren", "DiBerardino", 5, null),
       (6, "Megan", "Peers", 6, 5),
       (7, "Matt", "Miller", 7, null),
       (8, "Rob", "Taylor", 8, 7); 