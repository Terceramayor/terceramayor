const Product = require('../models/productModel');

function productActionsController() {
  function createProduct(required, response) {
    try {
      const newProduct = new Product(required.body);
      newProduct.save();
      response.json(newProduct);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getAllProducts(required, response) {
    try {
      const productList = await Product.find({}).exec();
      response.json(productList);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getProduct(required, response) {
    try {
      const singleItem = await Product.find(required.body).exec();
      response.json(singleItem);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  return {
    createProduct,
    getProduct,
    getAllProducts

  };
}

module.exports = productActionsController();
