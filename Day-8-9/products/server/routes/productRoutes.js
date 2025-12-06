const express = require("express");
const router = express.Router();
const Product = require('../models/product');
const { default: mongoose } = require("mongoose");


router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ message: "Products retrieved", data: products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
})

//Add product

router.post('/', async (req, res) => {
    console.log(req)
    try {
        if (!req.body){
            return res.status(400).json({error:"Request body is empty"})
        }
        const {name, price, image, description} = req.body

        //validation
        const product = new Product({
            name,
            price,
            image,
            description
        })

        await product.save();
        res.status(201).json({message:"Product added", data:product});

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


//Get product by id

router.get('/:id', async (req, res) => {
    try {
        const productID = req.params?.id
        if(!mongoose.Types.ObjectId.isValid(productID)){
            return res.status(400).json({error:"Invalid product ID format"})
        }
        if(!req.body){
            return res.status(400).json({error:"Request body is empty"})
        }
        const product = await Product.findById(productID)
        res.status(200).json({message:"Product found", data:product})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

//Update product by id

router.patch('/:id', async (req, res) => {
    try {
        const productID = req.params?.id
        if(!mongoose.Types.ObjectId.isValid(productID)){
            return res.status(400).json({error:"Invalid product ID format"})
        }
        if(!req.body){
            return res.status(400).json({error:"Request body is empty"})
        }
        const updatedProduct = await Product.findByIdAndUpdate(productID, req.body, {new:true})
        res.status(200).json({message:"Product updated", data:updatedProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

//Delete product by id

router.delete('/:id', async (req, res) => {
    try {
        const productID = req.params?.id
        if(!mongoose.Types.ObjectId.isValid(productID)){
            return res.status(400).json({error:"Invalid product ID format"})
        }
        const deletedProduct = await Product.findByIdAndDelete(productID)
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted", data: deletedProduct });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;