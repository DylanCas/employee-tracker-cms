// node modules for inquirer, MySQL, and the console table
const inquirer = require('inquirer');
require('dotenv').config()

// Pulls outside functions from routes folder to use in later switch
const routes = require('./routes/userRoutes')

// Inquirer questions
inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?(Use Up and Down Arrows)',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        name: 'initialChoice'
    },
])

.then((data) => {
    switch(data.initialChoice) {
        case 'View All Employees':
            console.log(data.initialChoice)
            routes.viewAllEmployees
        break;
        case 'View All Departments':
            routes.viewAllDepartments
        break;
    }
})

