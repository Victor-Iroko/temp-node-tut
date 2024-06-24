// The HTTP module (intro)

const http = require('http')


// you can call the parameters (req, res) anything you want but its common practice to name it req & res
// req stands for request and res stands for response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // i.e. if the url is the homa page
        res.end("Welcome to our home page")
    }
    // res.write("Welcome to our home page")
    // res.end() // ending the request

    else if (req.url === '/about') {
        res.end("Here is our short history")
    } else {

    // defualt response for when the url is not specified
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href='/'>Back home</a>
        `)

    }
})

server.listen(5000) // specifying the port number that the server would be listening to (it can be any number)
