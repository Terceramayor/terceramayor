const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  name: String,
  price: Number,
  product_range: { type: Schema.Types.ObjectId, ref: 'productTypes' },
  stock: Number,
  image_url: String
});

module.exports = model('productItems', itemSchema);
