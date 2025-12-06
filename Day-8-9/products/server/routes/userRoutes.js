const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

router.post('/', async (req,res)=>{
    try {
        const {name, email, password, image} = req.body || {}
        console.log(name, email, password)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router