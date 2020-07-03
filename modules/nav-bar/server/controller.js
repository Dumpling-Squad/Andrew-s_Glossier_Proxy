const db = require('../db/model.js');

const controller = {
  get: (req, res) => {
    db.get((err, results) => {
      if(err) {
        res.status(400).send("err retrieving from db");
      } else {
        res.status(200).send(results);
      }
    })
  },

  getSearched: (req, res) => {
    db.getSearched(req.params.params, (err, results) => {
      if(err) {
        res.status(401).send("err retreiving searched products from db", err);
      } else {
        res.status(201).send(JSON.stringify(results));
      }
    })
  },

  getId: (req, res) => {
    db.getId(req.params.id, (err, results) => {
      if(err) {
        res.status(402).send("err retrieving id from db");
      } else {
        res.status(202).send(results);
      }
    })
  }
}

module.exports = controller;
