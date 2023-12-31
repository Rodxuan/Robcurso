const mysql = require('mysql');
require('dotenv').config();


const db = mysql.createConnection({
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
});

db.connect();


module.exports = db;
