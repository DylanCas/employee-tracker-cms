const mysql2 = require('mysql2')
require('dotenv').config();

// create the connection to database
const db = mysql2.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the classlist_db database.`)
);

module.exports = db