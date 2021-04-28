const { Router } = require('express');
const itemsActionsController = require('../controllers/controller');

function megaCompanyApiRoutes() {
  const router = Router();

  router
    .route('/product')

    .post(itemsActionsController.getProduct);

  router
    .route('/productUpload')
    .post(itemsActionsController.createProduct);

  router
    .route('/productList')
    .get(itemsActionsController.getAllProducts);

  return router;
}

module.exports = megaCompanyApiRoutes();
