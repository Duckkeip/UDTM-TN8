var express = require('express'); 
var router = express.Router(); 
var db = require('../config/db'); 
/* GET: Lay all du lieu category view limit 10. */ 
router.get('/category', async function (req, res) { 
const database = await db(); 
// Truy cap table category 
const category = database.collection('danhmuc'); 
const products = database.collection('sanpham'); 
// Thực hiện query 
const result_category = await 
category.find({}).limit(10).toArray(); 
    const result_products = await products.find({}).toArray(); 
 
    // Them column count_item 
    const result = result_category.map(cat => { 
        const count = result_products.filter(p => 
p.category.toString() === cat._id.toString()).length; 
        return { 
            _id: cat._id, 
            name: cat.name, 
            icon: cat.icon, 
            items: count 
        }; 
    }); 
 
    res.json({ category: result }); 
}); 
 
/* GET: Lay all du lieu category. */ 
router.get('/category/viewall', async function (req, res) { 
    const database = await db(); 
    // Truy cap table category 
    const category = database.collection('danhmuc'); 
    const products = database.collection('sanpham'); 
 
    // Thực hiện query 
    const result_category = await category.find({}).toArray(); 
    const result_products = await products.find({}).toArray(); 
 
    // Them column count_item 
    const result = result_category.map(cat => { 
        const count = result_products.filter(p => 
p.category.toString() === cat._id.toString()).length; 
        return { 
            _id: cat._id, 
            name: cat.name, 
            icon: cat.icon, 
            items: count 
        }; 
    }); 
 
    res.json({ category: result }); 
}); 
module.exports = router; 