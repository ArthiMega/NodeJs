const fs = require('fs');
fs.writeFileSync('hello.txt','Hello form node js'); 

var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'Text/html'})
    res.end("Hi Arthi. Come let's learn Node js")
}).listen(8080)