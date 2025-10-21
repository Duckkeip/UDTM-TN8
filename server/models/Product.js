const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  image:       { type: String },
  images:      [{ type: String }],
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  sizes:       [{ type: String }],
  colors:      [{ type: String }],
  stock:       { type: Number, default: 0 },
  discount:    { type: Number, default: 0 },
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
