const { Router } = require('express');

const ratedProductController = require('../controllers/ratedProductsController');

function obsoletesApiRoutes() {
  const router = Router();

  router
    .route('/ratedProducts')
    .post(ratedProductController.createProduct)
    .get(ratedProductController.getAllProducts);

  router
    .route('/ratedSingleProduct')
    .put(ratedProductController.updateProductStats);

  return router;
}

module.exports = obsoletesApiRoutes();
