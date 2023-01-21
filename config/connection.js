const mysql2 = require('mysql2')
require('dotenv').config();

// create the connection to database
const db = mysql2.createConnection(
  {
    host: '127.0.0.1',
    // database selector
    database: process.env.DB_NAME,
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
  },
  console.log(`Connected to the company_db database.`)
);

module.exports = db