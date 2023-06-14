const http = require('http')

const server = http.createServer((req,res) => {
    if ( req.url === '/') {
        res.end('Welcome to our homepage')
    }
   else if ( req.url === '/about') {
        res.end('This is a short history')
    } else {
        res.end(`
            <h1>Oops! Cannot be found</h1>
            <p>The page you are looking for is missing</p>
            <a href="/">Return home</a>
        `)
    }
})

server.listen(5004)