const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/' && req.method === 'GET'){
            res.end("Welcome to the Home Page (GET Method)");
    }
    if(req.url === '/about' && req.method === 'GET'){
            res.end("Welcome to the about Page (GET Method)");
    }
    res.statusCode = 404;
    res.end("404 route not found")
    // OR 
    // res.writeHead(404).end("404 route not found");
})

server.listen(8000, ()=>{
    console.log('Your Server is Running at http://localhost:8000');
})