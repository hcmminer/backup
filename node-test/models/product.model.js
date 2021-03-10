const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    decscription: String
  });

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;