const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    id: Number,
    description: String,
    imgUrl: String,
    name: String,
    price: String,
    rating: Number,
    reviews: Number
});
var Product = mongoose.model("Product", productSchema);
  
module.exports = Product;