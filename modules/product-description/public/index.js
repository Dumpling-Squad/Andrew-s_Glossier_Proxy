var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'products'
});

connection.connect(function(err) {
  if (err) {
    console.log('Cannot connect to DB');
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;