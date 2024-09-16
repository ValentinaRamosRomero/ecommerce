const {Category} = require('../models/category');
const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();
const plimit = require('p-limit');
const cloudinary = require("../utils/cloudinary.js")

router.get(`/`, async(req,res) =>{
    const productList = await Product.find().populate("category");

    if(!productList){
        res.status(500).json({success: false})
    }
    res.send(productList);
})

router.post(`/create`, async (req, res) =>{

    const category = await Category.findById(req.body.category);
    if(!category){
        return res.status(404).send("invalid Category!");
    }
    const limit = plimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgurl = uploadStatus.map(item => {
        return item.secure_url
    })
    
    if (!uploadStatus) {
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        })
    }

    

    let product = new Product(req.body);

    product = await product.save();
    if(!product){
        res.status(500).json({
            error: err,
            success: false
        })
    }

    res.status(201).json(product);
})



module.exports = router;