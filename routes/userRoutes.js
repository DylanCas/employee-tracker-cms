const db = require('../config/connection')
const cTable = require('console.table');
const inquirer = require('inquirer');

const viewAllEmployees = () => {
    db.query(`
    SELECT em.id AS id, em.first_name as 'first name', em.last_name as 'last name', roles.title AS title, department.depName AS department, roles.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee em 
    LEFT JOIN roles ON em.role_id = roles.id 
    LEFT JOIN department ON roles.department_id = department.id 
    LEFT JOIN employee manager ON manager.id = em.manager_id;`, (err, res) => {
        if (err) {
            console.log('Sorry, there was an unexpected error. Please restart and try again.');
        }
        console.log('\n');
        console.table(res);
        console.log('\n');
      });
}

const viewAllRoles = () => {
    db.query(`
    SELECT roles.id, title, salary, department.depName AS 'department name' FROM roles
    LEFT JOIN department ON roles.department_id = department.id;
    `, ( err, res) => {
        if (err) {
            console.log(`Sorry, there was an unexpected error. Please restart and try again. ERROR: ${err}`);
        };
        console.log(`\n`);
        console.table(res);
        console.log(`\n`);
    })
}

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.log('Sorry, there was an unexpected error. Please restart and try again.');
        }
        console.log(`\n`);
        console.table(res);
        console.log(`\n`);
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
            // TODO: have list update based on existing roles in db? https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team', 'Lawyer'],
            name: 'newEmployeeRole'
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            // TODO: How to have list display existing names from database? https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
            choices: ['JD McLane', 'Dylan Casabona', 'Lauren DiBerardino', 'Matt Miller'],
            name: 'newEmployeeManager'
        },
    ])
    const getRoleid = await db.promise().query(`SELECT id FROM roles WHERE title = '${newEmployeeRole}'`);
    // console.log(getRoleid[0][0].id)
    const managerNameArr = newEmployeeManager.split(' ')
    // console.log(managerNameArr[1])
    const getManagerid = await db.promise().query(`SELECT id FROM employee WHERE last_name = '${managerNameArr[1]}'`)
    console.log(getManagerid[0][0].id)
    const createEmployee = await db.promise().query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
        VALUES ('${newEmployeeFirstName}', '${newEmployeeLastName}', '${getRoleid[0][0].id}', '${getManagerid[0][0].id}')`)
    createEmployee
}

const updateEmployeeRole = async () => {
    const {employeeToUpdate, employeeUpdateRole} = await
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which employees role do you want to update?',
            // TODO: How to have list display existing names from database? https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
            choices: ['JD McLane', 'Jonathan Rees', 'Dylan Casabona', 'Kirk Newkirk', 'Lauren DiBerardino', 'Megan Peers', 'Matt Miller', 'Rob Taylor'],
            name: 'employeeToUpdate'
        },
        {
            type: 'list',
            message: 'Which role do you want to assign the selected employee?',
            // TODO: have list update based on existing roles in db? https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
            name: 'employeeUpdateRole'
        },
    ])
    const getUpdateRoleid = await db.promise().query(`SELECT id FROM roles WHERE title = '${employeeUpdateRole}'`);
    // console.log(getUpdateRoleid[0][0].id)
    const updateRole = await db.promise().query(`UPDATE employee 
    SET role_id = '${getUpdateRoleid[0][0].id}'
    WHERE concat(first_name, ' ', last_name) = '${employeeToUpdate}'`);
    updateRole
} 

const addRole = async () => {
    const {newRoleName, newRoleSalary, newRoleDepartment} = await
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
            // TODO: have list update based on existing departments in db? https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
            choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
            name: 'newRoleDepartment'
        }
    ])
    const getDepartmentid = await db.promise().query(`SELECT id FROM department WHERE depName = '${newRoleDepartment}'`);
    // console.log(newRoleDepartment);
    // console.log(getDepartmentid[0][0].id);
    const createRole = await db.promise().query(`INSERT INTO roles (title, salary, department_id)
    VALUES ('${newRoleName}', '${newRoleSalary}', '${getDepartmentid[0][0].id}')`)
    createRole
}

const addDepartment = async () => {
    const { newDepartmentName } = await
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'newDepartmentName'
        }
    ])
    // console.log(`${newDepartmentName}`)
    const createDepartment = await db.promise().query(`INSERT INTO department (depName) VALUES ('${newDepartmentName}')`)
    createDepartment
}

// adds functions to exports
module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment }