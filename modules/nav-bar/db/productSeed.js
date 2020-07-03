const db = require('./index.js');
const faker = require('faker');

const aws = require('aws-sdk');
const config = require('../config/config.json');

(async function () {
  try {
      aws.config.setPromisesDependency();
      aws.config.update({
        accessKeyId: config.aws.accessKey,
        secretAccessKey: config.aws.secretKey,
        region: 'us-west-1'
      });
      const s3 = new aws.S3();
      const response = await s3.listObjectsV2({
        Bucket: 'navbar-mock-images-body'
      })
      .promise()
      .then((results) => {
        results.Contents.map((result) => {
          let name =`${faker.commerce.productName()}`;
          let description = `${faker.commerce.productName().toLowerCase()}`;
          let type = 'body';
          let image = "https://navbar-mock-images-body.s3-us-west-1.amazonaws.com/" + result.Key;

          var queryString = `INSERT INTO products (name, description, image, type) VALUES ('${name}', '${description}', '${image}', '${type}');`
          db.query(queryString, (err) => {
            if(err) {
              console.log(err)
              console.log("failed seeding product");
            } else {
              console.log("successful seeding product");
            }
          })
        })
      })
      const response2 = await s3.listObjectsV2({
        Bucket: 'navbar-mock-images-skincare'
      })
      .promise()
      .then((results) => {
        results.Contents.map((result) => {
          let name =`${faker.commerce.productName()}`;
          let description = `${faker.commerce.productName().toLowerCase()}`;
          let type = 'skinCare';
          let image = "https://navbar-mock-images-skincare.s3-us-west-1.amazonaws.com/" + result.Key;

          var queryString = `INSERT INTO products (name, description, image, type) VALUES ('${name}', '${description}', '${image}', '${type}');`
          db.query(queryString, (err) => {
            if(err) {
              console.log(err)
              console.log("failed seeding product");
            } else {
              console.log("successful seeding product");
            }
          })
        })
      })

      const response3 = await s3.listObjectsV2({
        Bucket: 'navbar-mock-images-makeup'
      })
      .promise()
      .then((results) => {
        results.Contents.map((result) => {
          let name =`${faker.commerce.productName()}`;
          let description = `${faker.commerce.productName().toLowerCase()}`;
          let type = 'makeUp';
          let image = "https://navbar-mock-images-makeup.s3-us-west-1.amazonaws.com/" + result.Key;

          var queryString = `INSERT INTO products (name, description, image, type) VALUES ('${name}', '${description}', '${image}', '${type}');`
          db.query(queryString, (err) => {
            if(err) {
              console.log(err)
              console.log("failed seeding product");
            } else {
              console.log("successful seeding product");
            }
          })
        })
      })

      const response4 = await s3.listObjectsV2({
        Bucket: 'navbar-mock-images-fragrance'
      })
      .promise()
      .then((results) => {
        results.Contents.map((result) => {
          let name =`${faker.commerce.productName()}`;
          let description = `${faker.commerce.productName().toLowerCase()}`;
          let type = 'fragrance';
          let image = "https://navbar-mock-images-fragrance.s3-us-west-1.amazonaws.com/" + result.Key;

          var queryString = `INSERT INTO products (name, description, image, type) VALUES ('${name}', '${description}', '${image}', '${type}');`
          db.query(queryString, (err) => {
            if(err) {
              console.log(err)
              console.log("failed seeding product");
            } else {
              console.log("successful seeding product");
            }
          })
        })
      })

      const response5 = await s3.listObjectsV2({
        Bucket: 'navbar-mock-images-shopoursets'
      })
      .promise()
      .then((results) => {
        results.Contents.map((result) => {
          let name =`${faker.commerce.productName()}`;
          let description = `${faker.commerce.productName().toLowerCase()}`;
          let type = 'shopOurSets';
          let image = "https://navbar-mock-images-shopoursets.s3-us-west-1.amazonaws.com/" + result.Key;

          var queryString = `INSERT INTO products (name, description, image, type) VALUES ('${name}', '${description}', '${image}', '${type}');`
          db.query(queryString, (err) => {
            if(err) {
              console.log(err)
              console.log("failed seeding product");
            } else {
              console.log("successful seeding product");
            }
          })
        })
      })
  } catch (err) {
    console.error(err);
  }
  debugger;
})();


