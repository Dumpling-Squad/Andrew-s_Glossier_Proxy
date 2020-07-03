const db = require('./index.js');

const dbHelpers = {
  get: (callback) => {
    var queryString = `SELECT * FROM products;`
    db.query(queryString, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  getSearched: (params, callback) => {
    var queryString = `SELECT * FROM products WHERE name LIKE '${params}%' OR description LIKE '${params}%';`
    db.query(queryString, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },
  getId: (id, callback) => {
    var queryString = `SELECT * FROM products WHERE type='${id}';`
    db.query(queryString, (err, results) => {
      if(err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}

module.exports = dbHelpers;