const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  type: {
    type: String,
    enum: [
      'Music',
    'Fashion', 
    'Kitchen',
    'Health Care',
    'Books and Stationery',
    'Sports',
    'Games',
    'Beauty',
    'Jewelry',
    'Groceries',
    'Baby Products',
    'Hardware',
    'Office Supplies',
    'Musical Instruments',
    'Furniture',
    'Art and Craft',
    'Industrial and Scientific',
    'Video Games',
    ],
  },
  stock: {type:Number,required:true},
  price: { type: Number, required: true },
  available: Boolean,
  seller: { type: String, required: true },
});

module.exports = mongoose.model("product", ProductSchema);
