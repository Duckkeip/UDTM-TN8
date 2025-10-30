var express = require('express'); 
var router = express.Router(); 
var db = require('../config/db'); 
const { ObjectId } = require('mongodb');

/* GET: Lay all du lieu products. */ 
router.get('/products', async function (req, res) {   
    const database = await db(); 
    // Truy cap table products 
    const products = await database.collection('sanpham'); 
 
    // Thực hiện query 
    const result = await products.find({}).toArray(); 
 
    res.json({ products: result }); 
}); 
 
/* GET: Lay all du lieu products. */ 
router.get('/products/:id', async function (req, res) { 
    const database = await db() ; 
    // Truy cap table products 
    const products = database.collection('sanpham'); 
    // Thực hiện query 
    const result = await products.findOne({ _id: new ObjectId(req.params.id)}); 
 
    res.json({ products: result }); 
}); 
 
module.exports = router;