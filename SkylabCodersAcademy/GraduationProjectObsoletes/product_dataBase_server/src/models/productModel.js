const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  brand: String,
  name: String,
  category: String,
  price: Number,
  thumbNail_url: String
});

module.exports = model('Products', productSchema);
