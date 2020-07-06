const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3002;
const randomProductId = (numberOfProducts) => Math.floor(Math.random() * numberOfProducts);
let counter = 1;
let productId = randomProductId(100);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/', express.static(path.join(`${__dirname}/../public`)));

// app.use((req, res, next) => {
//   productId = randomProductId(100);
//   next();
// });

// Sets the productId for all modules
app.get('/productId', (req, res) => {
  counter += 1;
  if (counter % 2 === 0) {
    productId = randomProductId(100);
    console.log(productId);
    res.status(200).json({ productId });
  } else {
    res.status(200).json({ productId });
  }
});

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

// Andrew's service
app.use(
  '/reviews',
  createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }),
);

// Koboh's service
app.use(
  '/nav',
  createProxyMiddleware({ target: 'http://localhost:3006', changeOrigin: true }),
);

// Marlena's service
app.use(
  '/products/suggested',
  createProxyMiddleware({ target: 'http://localhost:3050', changeOrigin: true }),
);
app.use(
  '/products/shades',
  createProxyMiddleware({ target: 'http://localhost:3050', changeOrigin: true }),
);
app.use(
  '/products/quickview',
  createProxyMiddleware({ target: 'http://localhost:3050', changeOrigin: true }),
);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Reviews module app listening at http://localhost:${port}`));
