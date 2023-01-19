const db = require('../config/connection')
const cTable = require('console.table');
const inquirer = require('inquirer');

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.log('Sorry, there was an unexpected error. Please restart and try again.');
        }
        console.table(res);
      });
}

const viewAllRoles = () => {
    db.query('SELECT * FROM roles', ( err, res) => {
        if (err) {
            console.log('Sorry, there was an unexpected error. Please restart and try again.');
        };
        console.table(res);
    })
}

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.log('Sorry, there was an unexpected error. Please restart and try again.');
        }
        console.table(res);
    });
}

const addEmployee = async () => {
    const {newEmployeeFirstName, newEmployeeLastName, newEmployeeRole, newEmployeeManager} = await 
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
            // TODO: have list update based on existing roles in db?
            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team', 'Lawyer'],
            name: 'newEmployeeRole'
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            // TODO: How to have list display existing names from database?
            choices: [],
            name: 'newEmployeeManager'
        },
    ])
    // error: managerid pass as an object
    const getRoleid = await db.promise().query(`SELECT id FROM roles WHERE title = '${newEmployeeRole}'`);
    // console.log(getRoleid[0][0].id)
    const getManagerid = await db.promise().query(`SELECT id FROM employee WHERE id = '${newEmployeeManager}'`)
    console.log(newEmployeeManager)
    // console.log(getManagerid)
    const createEmployee = await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${newEmployeeFirstName}', '${newEmployeeLastName}', '${getRoleid[0][0].id}', '${getManagerid}')`)
    createEmployee
}

const updateEmployeeRole = async () => {
    
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which employees role do you want to update?',
            // TODO: How to have list display existing names from database?
            choices: ['JD McLane', 'Jonathan Rees', 'Dylan Casabona', 'Kirk Newkirk', 'Lauren DiBerardino', 'Megan Peers', 'Matt Miller', 'Rob Taylor'],
            name: 'employeeUpdate'
        },
        {
            type: 'list',
            message: 'Which role do you want to assign the selected employee?',
            // TODO: have list update based on existing roles in db?
            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team', 'Lawyer'],
            name: 'employeeUpdateRole'
        },
    ])
} 

const addRole = async () => {
    cosn
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
            // TODO: have list update based on existing departments in db?
            choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
            name: 'newRoleDepartment'
        }
    ])
}

const addDepartment = async () => {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'newDepartmentName'
        }
    ])
}

// adds functions to exports
module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment }