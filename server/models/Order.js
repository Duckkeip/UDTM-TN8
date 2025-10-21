const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  size:       { type: String },
  color:      { type: String },
  quantity:   { type: Number, required: true },
  price:      { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  user_id:         { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items:           [orderItemSchema],
  totalAmount:     { type: Number, required: true },
  paymentMethod:   { type: String, enum: ["COD", "MOMO", "VNPAY"], default: "COD" },
  shippingAddress: { type: String, required: true },
  status:          { type: String, enum: ["pending", "processing", "shipped", "delivered", "cancelled"], default: "pending" },
  orderDate:       { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
