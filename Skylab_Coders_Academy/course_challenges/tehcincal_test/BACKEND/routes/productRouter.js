const { Router } = require('express');
const itemsActionsController = require('../controllers/itemControllers');
const productTypesController = require('../controllers/productTypesController');

function profarmaApiRoutes() {
  const router = Router();

  router
    .route('/items')
    .post(itemsActionsController.createItem)
    .get(itemsActionsController.getAllItems);

  router
    .route('/items/:itemId')
    .get(itemsActionsController.getOneItem)
    .put(itemsActionsController.updateItem)
    .delete(itemsActionsController.deleteItem);

  router
    .route('/productTypes')
    .post(productTypesController.createItem)
    .get(productTypesController.getAllItems);

  router
    .route('/productTypes/:itemId')
    .put(productTypesController.updateItem)
    .delete(productTypesController.deleteItem);

  return router;
}

module.exports = profarmaApiRoutes();
