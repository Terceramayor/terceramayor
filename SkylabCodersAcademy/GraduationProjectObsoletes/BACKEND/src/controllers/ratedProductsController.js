const RatedProducts = require('../models/ratedProductsModel');

function ratedProductController() {
  function createProduct(required, response) {
    try {
      const newRatedProduct = new RatedProducts(required.body);
      newRatedProduct.save();
      response.json(newRatedProduct);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function getAllProducts(required, response) {
    try {
      const allRatedProducts = await RatedProducts.find({}).exec();
      response.json(allRatedProducts);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  async function updateProductStats(required, response) {
    const { _id } = required.body;

    try {
      const updatedProductStats = await RatedProducts.findByIdAndUpdate(
        _id, required.body, { new: true }
      ).exec();

      response.json(updatedProductStats);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  }

  return {
    createProduct,
    getAllProducts,
    updateProductStats

  };
}

module.exports = ratedProductController();
