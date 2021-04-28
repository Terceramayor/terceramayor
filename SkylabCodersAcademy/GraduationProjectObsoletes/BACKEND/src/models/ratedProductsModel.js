const { Schema, model } = require('mongoose');

const ratedProductsSchema = new Schema({
  originId: String,
  productName: String,
  thumbnailUrl: String,
  brand: String,
  category: String,
  obsoletion: Number,
  updatedDate: Date,
  stats: [{
    buyDate: Date,
    broken: Boolean,
    brokenDate: Date,
    user: String,
    reason: String
  }]
});

module.exports = model('RatedProducts', ratedProductsSchema);
