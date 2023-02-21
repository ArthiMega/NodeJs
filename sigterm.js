let express = require('express')
let app = express()

app.get('/', function(req,res){
    res.send("Hi Developer")
})

const server = app.listen(8000, ()=>{
    console.log("Running...")
    // process.exit(1);
})

process.on('SIGTERM',()=>{
    server.close(()=>{
        console.log("Connection Terminated!");
    })
})