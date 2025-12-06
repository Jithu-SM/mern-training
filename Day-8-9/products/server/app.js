const express = require("express");
const cors = require("cors")
const app=express()
require("dotenv").config()
const mongoose = require("mongoose")
const port = process.env.PORT
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(cors());

app.use(express.json())

app.use('/products',productRoutes)
app.use('/users',userRoutes)

async function main() {
  await mongoose.connect(process.env.MONGOURL)
}

main()
.then(() => console.log("MongoDB connection successful"))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  try {
    res.status(200).json({"Status": "HelloWorld2222"})

  } catch (error) {
    res.status(404).json({error:error.message})
  }
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})