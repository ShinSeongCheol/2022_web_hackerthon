const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user:'test',
    password:'1111',
    database:'reactborad'
});

module.exports = db;
