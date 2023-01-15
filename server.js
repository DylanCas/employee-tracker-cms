// node modules for inquirer, and the console table
const inquirer = require('inquirer');
require('dotenv').config()

// Pulls outside functions from routes folder to use in later switch
const routes = require('./routes/userRoutes')

// Inquirer questions
inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        name: 'initialChoice'
    },
])

.then((data) => {
    switch(data.initialChoice) {
        case 'View All Employees':
            console.log(data.initialChoice)
            routes.viewAllEmployees()
        break;
        case 'Add Employee':
            console.log(data.initialChoice)
            routes.addEmployee()
        break;
        case 'Update Employee Role':
            console.log(data.initialChoice)
            routes.updateEmployeeRole()
        break;
        case 'View All Roles':
            console.log(data.initialChoice)
            routes.viewAllRoles()
        break;
        case 'Add Role':
            console.log(data.initialChoice)
            routes.addRole()
        break; 
        case 'View All Departments':
            console.log(data.initialChoice)
            routes.viewAllDepartments()
        break;
        case 'Add Department':
            console.log(data.initialChoice)
            routes.addDepartment()
        break;
    }
    // TODO: need to loop back through when initialChoice !== 'Quit'
})

