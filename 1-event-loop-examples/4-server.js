const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(5004, () => {
    console.log('Server listening on port: 5000 ....')
})