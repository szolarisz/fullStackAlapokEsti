const http = require('http');
const fs = require('fs');
const port = 5555;

const server = http.createServer( (req,res) =>{
    console.log("Új kérés érkezett:");
    console.log(req.url);
    console.log(req.method);

    //router
    switch( true){

        case req.url ==="/" && req.method==="GET":
            fs.readFile("./views/index.html", (err, file) =>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(file);
            })
        break;
        
        case req.url ==="/script.js" && req.method === "GET":
            fs.readFile("./public/script.js", (err, script) =>{
                res.setHeader('Content-Type', 'text/javascript');
                res.writeHead(200);
                res.end(script);
            })
        break;

        default:
            fs.readFile("./views/error.html", (err, file) =>{
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(404);
                res.end(file);
            })

    }
});

server.listen(port);