const db = require('../config/connection')
const cTable = require('console.table');

const routes = {
    viewAllDepartments: function() {
        db.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
          });
    }
}


// adds functions to exports
module.exports = routes