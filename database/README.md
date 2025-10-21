# sơ lược về database

---

## users


```js
    {
  _id: ObjectId,
  username: String,
  email: String,
  password: String,        // mã hoá (bcrypt)
  phone: String,
  address: String,
  role: { type: String, default: "user" },  // user | admin
  createdAt: Date
    }
```

---

## products

```js

{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  image: String,           // ảnh đại diện
  images: [String],        // ảnh chi tiết
  category_id: ObjectId,   // liên kết tới "categories"
  sizes: [String],         // ["S", "M", "L", "XL"]
  colors: [String],        // ["Đen", "Trắng", "Xanh"]
  stock: Number,
  discount: Number,        // % giảm giá (nếu có)
  createdAt: Date
}


```

---

## categories

```js
{
  _id: ObjectId,
  name: String,            // "Áo", "Quần"
  slug: String,            // "ao", "quan"
  createdAt: Date
}
```

---

## carts

```js
    {
  _id: ObjectId,
  user_id: ObjectId,
  items: [
    {
      product_id: ObjectId,
      size: String,
      color: String,
      quantity: Number
    }
  ],
  total: Number,
  updatedAt: Date
}

```

## orders

```js
{
  _id: ObjectId,
  user_id: ObjectId,
  items: [
    {
      product_id: ObjectId,
      size: String,
      color: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  paymentMethod: String,   // "COD", "MOMO", "VNPAY"
  shippingAddress: String,
  status: { type: String, default: "pending" },
  orderDate: Date
}
```

---






