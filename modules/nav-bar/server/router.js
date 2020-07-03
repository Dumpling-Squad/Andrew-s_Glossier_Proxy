const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/')
  .get(controller.get)

  router
  .route('/search/:params')
  .get(controller.getSearched)

router
  .route('/:id')
  .get(controller.getId)


module.exports = router;