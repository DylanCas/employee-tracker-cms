const db = require('../config/connection')
const cTable = require('console.table');

const routes = {
    viewAllEmployees: function() {
        db.query('SELECT * FROM employee', function (err, res) {
            console.table(res);
          });
    },
    addEmployee: function() {
        
    },
    updateEmployeeRole: function() {

    },
    viewAllRoles: function() {
        db.query('SELECT * FROM roles', function ( err, res) {
            console.table(res)
        })
    },
    addRole: function() {

    },
    viewAllDepartments: function() {
        db.query('SELECT * FROM department', function (err, res) {
            console.table(res);
        });
    }, 
    addDepartment: function() {

    }
};


// adds functions to exports
module.exports = routes