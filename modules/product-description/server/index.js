const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');
const db = require('../db/index.js');

const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/images', (req, res) => {
  db.query('SELECT * FROM images;', (err, result) => {
    if (err) {
      // res.status(404);
      res.send('Error');
    } else {
      // res.status(204);
      res.send(result);
    }
  });
});

app.get('/images/:id', (req, res) => {
  db.query(`SELECT * FROM images WHERE id=${req.params.id};`, (err, result) => {
    if (err) {
      // res.status(404);
      res.send('Error');
      // console.log(req.body.id);
    } else {
      // res.status(204);
      res.send(result);
    }
  });
});

app.get('/product', (req, res) => {
  db.query('SELECT * FROM product;', (err, result) => {
    if (err) {
      // res.status(404);
      res.send('Error');
    } else {
      // res.status(204);
      res.send(result);
    }
  });
});

app.get('/product/:title', (req, res) => {
  db.query(`SELECT * FROM product WHERE title='${req.params.title}';`, (err, result) => {
    if (err) {
      // res.status(404);
      res.send('Error');
    } else {
      // res.status(204);
      res.send(result);
    }
  });
});

app.get('/details', (req, res) => {
  db.query('SELECT * FROM details;', (err, result) => {
    if (err) {
      // res.status(404);
      res.send('Error');
    } else {
      // res.status(204);
      res.send(result);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
