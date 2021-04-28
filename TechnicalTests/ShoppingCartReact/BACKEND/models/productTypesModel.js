const { Schema, model } = require('mongoose');

const productTypeschema = new Schema({
  type: String,
  segment: String
});

module.exports = model('productTypes', productTypeschema);
