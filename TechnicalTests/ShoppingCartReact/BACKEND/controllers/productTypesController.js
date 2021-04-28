/* eslint-disable no-underscore-dangle */
const ProductTypes = require('../models/productTypesModel');
require('../models/productTypesModel');

function productTypesController() {
  function createItem(required, response) {
    try {
      const newProduct = new ProductTypes(required.body);
      newProduct.save();
      response.json(newProduct);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getAllItems(required, response) {
    try {
      console.log('hola');
      const productsList = await ProductTypes.find({});
      response.json(productsList);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function deleteItem(required, response) {
    const query = required.body._id;
    try {
      await ProductTypes.deleteOne(query);
      response.json('Product deleted from the database');
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function updateItem(required, response) {
    const { itemId } = required.params;

    try {
      const updatedProduct = await ProductTypes.findByIdAndUpdate(
        itemId,
        required.body,
        { new: true }
      );
      response.json(updatedProduct);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  return {
    createItem,
    getAllItems,
    deleteItem,
    updateItem
  };
}

module.exports = productTypesController();
