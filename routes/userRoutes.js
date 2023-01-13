const db = require('../config/connection')
const cTable = require('console.table');

const routes = {
    viewAllDepartments: function() {
        db.query('SELECT * FROM department', function (err, res) {
            console.table(res);
          });
    },
    viewAllEmployees: function() {
        db.query('SELECT * FROM employee', function (err, res) {
            console.table(res);
          });
    },
}


// adds functions to exports
module.exports = routes