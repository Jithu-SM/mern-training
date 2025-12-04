// 

const express = require('express')
const productRouter = require('./routes/productRoutes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/products',productRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

