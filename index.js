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
                res.setHeader('Content-Type', 'application/javascript');
                res.writeHead(200);
                res.end(script);
            })
        break;

        case req.url ==="/favicon.ico" && req.method==="GET":
            fs.readFile("./views/favicon.ico", (err,icon) => {
                res.setHeader("Content-Type", "image/ico")
                res.writeHead(200);
                res.end(icon);
            })
        break;

        case req.url==="/colors" && req.method==="GET":
            fs.readFile("./datas/colors.json", (err,data) => {
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(data);
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