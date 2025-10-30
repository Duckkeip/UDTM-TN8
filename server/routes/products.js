var express = require('express'); 
var router = express.Router(); 
var db = require('../config/db'); 


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
    const database = await db(); 
    // Truy cap table products 
    const products = database.collection('sanpham'); 
 
    // Thực hiện query 
    const result = await products.find({ _id: Object(req.params.id) 
}).toArray(); 
 
    res.json({ products: result }); 
}); 
 
module.exports = router;