const messenger = require('./greetings.js')

console.log("Hello from the server")

messenger.printer("Jithu")

const os = require('os');
console.log(`The current working directory is ${os.homedir()}`)
console.log('The platform is ', os.platform())
console.log(__dirname)
console.log(__filename)