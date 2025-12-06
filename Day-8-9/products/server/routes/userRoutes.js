const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const { createToken } = require("../utils/generateToken") 

router.post('/signup', async (req,res)=>{
    try {
        const {name, email, password, image} = req.body || {}
        // console.log(name, email, password)
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        // console.log(hashedPassword)

    //user creation
        const newUser = new User({name, email, password:hashedPassword, image})
        const savedUser = await newUser.save()
        return res.status(201).json({message:"User created", savedUser})

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "Internal server error"})
    }
})

router.post('/login', async (req, res) => {
  try {
    console.log('Login request body:', req.body) 

    const { email, password } = req.body || {}

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    // Normalize email to avoid casing issues
    const user = await User.findOne({ email: String(email).toLowerCase() })
    if (!user) {
      return res.status(400).json({ message: "User does not exist" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid user credentials" })
    }

    // create token (ensure createToken is exported from utils/generateToken)
    const token = createToken(user._id, 'user')
    res.cookie('token', token, { httpOnly: true })
    return res.status(200).json({ message: "Login success", user: { id: user._id, name: user.name, email: user.email } })
  } catch (error) {
    console.log(error)
    res.status(error.status || 500).json({ error: error.message || "Internal server error" })
  }
})
module.exports = router