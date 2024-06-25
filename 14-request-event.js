const http = require('http')

// Using event emitter api
const server = http.createServer()

// emits request event
// subscribe to it, listen for it, respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

// The above is the alternative for
// const server = http.createServer((req, res => {
//     res.end('welcome')
// })
// )


server.listen(8000)
