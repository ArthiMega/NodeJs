// const express = require('express');

// const app = express();

// app.get('/',function(req,res){
//     res.send('Hello World!')
// })
// app.get('/arthi',function(req,res){
//     const id = req.query.id
//     res.send('Hi Arthi Welcome to quary statement ' + id )
// })
// app.get('/arthi/:id', function(req, res){
//     const id = req.params.id
//     res.send(' Wow Arthi! ' + id)
// })
// app.post('/user',(req,res)=>{
//     res.send('Got a post request......')
// })
// app.listen(9000, function(req,res){
//     console.log('Running.... ')
// });

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.post('/',(req,res)=>{
    let data = req.body;
    res.send('Data Recieved: '+JSON.stringify(data))
})

app.listen(5000,()=>{
    console.log('Example app listening on port 5000')
})