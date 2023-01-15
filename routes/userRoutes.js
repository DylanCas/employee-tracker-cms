const db = require('../config/connection')
const cTable = require('console.table');
const inquirer = require('inquirer');

const routes = {
    viewAllEmployees: function() {
        db.query('SELECT * FROM employee', function (err, res) {
            console.table(res);
          });
    },
    addEmployee: function() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'newEmployeeFirstName'
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'newEmployeeLastName'
            },
            {
                type: 'list',
                message: 'What is the employees role?',
                choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team', 'Lawyer'],
                name: 'newEmployeeRole'
            },
            {
                type: 'list',
                message: 'Who is the employees manager?',
                // How to have list display existing names from database?
                choices: ['', '', '', ],
                name: 'newEmployeeManager'
            },
        ])
    },
    updateEmployeeRole: function() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Which employees role do you want to update?',
                // How to have list display existing names from database?
                choices: ['', '', '', ],
                name: 'employeeUpdate'
            },
            {
                type: 'list',
                message: 'Which role do you want to assign the selected employee?',
                choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team', 'Lawyer'],
                name: 'employeeUpdateRole'
            },
        ])
    },
    viewAllRoles: function() {
        db.query('SELECT * FROM roles', function ( err, res) {
            console.table(res)
        })
    },
    addRole: function() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the role?',
                name: 'newRoleName'
            },
            {
                type: 'input',
                message: 'What is the salary of the role?',
                name: 'newRoleSalary'
            },
            {
                type: 'list',
                message: 'What department does the role belong to?',
                choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
                name: 'newRoleDepartment'
            }
        ])
    },
    viewAllDepartments: function() {
        db.query('SELECT * FROM department', function (err, res) {
            console.table(res);
        });
    }, 
    addDepartment: function() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'newDepartmentName'
            }
        ])
    }
};


// adds functions to exports
module.exports = routes