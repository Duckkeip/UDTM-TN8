const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  size:       { type: String },
  color:      { type: String },
  quantity:   { type: Number, required: true, min: 1 }
});

const cartSchema = new mongoose.Schema({
  user_id:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items:    [cartItemSchema],
  total:    { type: Number, default: 0 },
  updatedAt:{ type: Date, default: Date.now }
});

module.exports = mongoose.model("Cart", cartSchema);
