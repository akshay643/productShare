import mongoose from "mongoose";
const allProductsSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_link: {
    type: String,
    required: true,
  },
  product_url: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Products || mongoose.model("Products", allProductsSchema);
