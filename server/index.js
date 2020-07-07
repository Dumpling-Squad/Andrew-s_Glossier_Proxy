const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3002;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Serve static files
app.use('/', express.static(path.join(`${__dirname}/../public`)));

// Generate a random productId
const randomProductId = (numberOfProducts) => Math.floor(Math.random() * numberOfProducts);
let counter = 0;
let productId = randomProductId(100);

// Sets the productId for all modules that request to this endpoint
app.get('/productId', (req, res) => {
  // Currently endpoint is being hit twice on each reload; by Mrinal's module and reviews module
  if (counter % 2 === 0) {
    // If endpoint has been hit twice since last time prodId was generated, geenerate a new one
    productId = randomProductId(100);
    res.status(200).json({ productId });
  } else {
    // Else send the current prodId
    res.status(200).json({ productId });
  }
  // Increment the counter each time the endpoint receives a request
  counter += 1;
});

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
