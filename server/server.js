// server/server.js
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const app = express();
var productsRouter = require('./routes/products'); 
var categoriesRouter = require('./routes/categories');
app.use(cors({
  origin: "http://localhost:4001", // cập nhật theo port frontend mới
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Kết nối DB
connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/auth", require("./routes/auth"));
app.use('/api/products', productsRouter); 
app.use('/api/categories', categoriesRouter);

app.get("/", (req, res) => {
  res.send("Quiz API đang chạy...");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server chạy trên cổng ${PORT}`));
// http://localhost:4000