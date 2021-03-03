/* eslint-disable no-underscore-dangle */
const ProductItems = require('../models/itemModel');
require('../models/productTypesModel');

function itemsActionsController() {
  function createItem(required, response) {
    try {
      const newProduct = new ProductItems(required.body);
      newProduct.save();
      response.json(newProduct);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getAllItems(required, response) {
    try {
      const productsList = await ProductItems.find({}).populate('product_range');
      response.json(productsList);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getOneItem(required, response) {
    try {
      const id = required.params.itemId;
      const singleItem = await ProductItems.findById(id).exec();
      response.json(singleItem);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getSingleitem(required, response) {
    const id = required.body._id;
    try {
      const singleItem = await ProductItems.findById(id).populate('product_type');
      response.json(singleItem);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function deleteItem(required, response) {
    const _id = required.params.itemId;
    try {
      await ProductItems.findOneAndDelete(_id);
      response.json('Product deleted from the database');
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function updateItem(required, response) {
    const { itemId } = required.params;

    try {
      const updatedProduct = await ProductItems.findByIdAndUpdate(
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
    getOneItem,
    getSingleitem,
    deleteItem,
    updateItem

  };
}

module.exports = itemsActionsController();
