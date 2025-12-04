// const messenger = require('./greetings.js')

// console.log("Hello from the server")

// messenger.printer("Jithu")

// const os = require('os');
// console.log(`The current working directory is ${os.homedir()}`)
// console.log('The platform is ', os.platform())
// console.log(__dirname)
// console.log(__filename)

const express = require('express')
const app = express()
const port = 3000

app.get('/products', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})