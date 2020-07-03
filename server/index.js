const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3002;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname + '/../public')));

// const staticPath = `${__dirname}/../public`;
// app.use('/products/:id', express.static(staticPath));


// app.use(
//   '/products/:id/details',
//   createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true })
// );
// Mrinal's services
app.use('/images', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/images/:id', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/product', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/product/:title', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/details', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

//Andrew's service
app.use(
  '/reviews',
  createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true })
);

//Koboh's service
app.use(
  '/nav',
  createProxyMiddleware({ target: 'http://localhost:3006', changeOrigin: true })
);

//Marlena's service
app.use(
  '/products/suggested',
  createProxyMiddleware({ target: 'http://localhost:3050', changeOrigin: true })
);

app.listen(port, () => console.log(`Reviews module app listening at http://localhost:${port}`));