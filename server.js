// node modules for inquirer, and the console table
const inquirer = require('inquirer');
require('dotenv').config()

// Pulls outside functions from routes folder to use in later switch
const routes = require('./routes/userRoutes')
// updated async functions
const { viewAllEmployees, addEmployee, updateEmployeeRole, viewAllRoles, addRole, viewAllDepartments, addDepartment } = require('./routes/userRoutes')

// Inquirer questions
function initialQuestions() {
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
            viewAllEmployees()
            console.log('\n')
            initialQuestions()
        break;
        case 'Add Employee':
            addEmployee()
            // initialQuestions()
        break;
        case 'Update Employee Role':
            updateEmployeeRole()
            // initialQuestions()
        break;
        case 'View All Roles':
            viewAllRoles()
            initialQuestions()
        break;
        case 'Add Role':
            addRole()
            // initialQuestions()
        break; 
        case 'View All Departments':
            viewAllDepartments()
            initialQuestions()
        break;
        case 'Add Department':
            addDepartment()
            // initialQuestions()
        break;
    }
})
}

initialQuestions()