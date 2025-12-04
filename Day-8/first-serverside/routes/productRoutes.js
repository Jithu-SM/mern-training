const express = require('express');
const router = express.Router();
const productList = require('../products');

//localhost://3000/products -GET
router.get('/',(req,res)=>{
    try{
        res.status(200).json({products:productList})
    } catch(error){
        res.status(404).json({error:error.message})
    }
})

//Get prosuct by id

//localhost://3000/products/{id} -GET

router.get('/:id',(req,res)=>{
    try{
        const productID = parseInt(req.params.id)
        // console.log(productID)
        const product = productList.find(prod=>prod.id===productID)
        if(!product){
            return res.status(404).json({error:"Product is not available"})
        }
        res.status(200).json({product:product})
    } catch(error){
        res.status(404).json({error:error.message})
    }
})

//Update prosuct by id

//localhost://3000/products/{id} -PATCH

router.patch('/:id',(req,res)=>{
    try{
        const productID = parseInt(req.params.id)
        const product = productList.find(prod=>prod.id===productID)
        if(!product){
            return res.status(404).json({error:"Product is not available"})
        }

        const {name,price,image} = req.body

        if(name !== undefined){
            product.name = name
        }

        if(price !== undefined){
            product.price = price
        }

        if(image !== undefined){              
            product.image = image
        }

        res.status(200).json({product:product})
        //res.end()
    } catch(error){
        res.status(404).json({error:error.message})
    }
})

module.exports = router