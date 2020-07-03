const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'navBar',
});

connection.connect(() => {
  'navBar database is connected';
});

module.exports = connection;
