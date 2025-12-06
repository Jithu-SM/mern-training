const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    image:String,
    role:{
        type:String,
        default:"user"
    }
},{timestamp:true})

const User = mongoose.model('User',userSchema)

module.exports = User