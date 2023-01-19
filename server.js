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
        break;
        case 'Add Employee':
            addEmployee()
        break;
        case 'Update Employee Role':
            updateEmployeeRole()
        break;
        case 'View All Roles':
            viewAllRoles()
        break;
        case 'Add Role':
            addRole()
        break; 
        case 'View All Departments':
            viewAllDepartments()
        break;
        case 'Add Department':
            addDepartment()
        break;
    }
    // This technically works, though it partially covers previous results, such as a table. Nevermind, seems to interrupt the further prompts from routes
    
    // if (data.initialChoice !== 'Quit') {
    //     initialQuestions()
    // }
})
}

initialQuestions()