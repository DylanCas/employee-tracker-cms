// node modules for inquirer, MySQL, express
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const app = express();


// Access chosen database, within the db folder/schema file
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     // TODO: Review .env info to encrypt password
//     password: '',
//     // TODO: Choose db?
//     database: ''
//   });
  

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
    console.log(data)
})

// Can I use switch statement to handle further choices or is this where promise function may come in? Or may the promise exist within the swicth?