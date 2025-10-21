// server/server.js

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// Kết nối DB
connectDB();

app.get("/", (req, res) => {
  res.send("Quiz API đang chạy...");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server chạy trên cổng ${PORT}`));
// http://localhost:5000