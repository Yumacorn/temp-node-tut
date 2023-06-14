const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the uptime of system in seconds
console.log(`The System Uptime is ${os.uptime()} in second(s)`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)