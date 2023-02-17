const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send('Hello World!')
})
app.get('/arthi',function(req,res){
    const id = req.query.id
    res.send('Hi Arthi Welcome to quary statement ' + id )
})
app.get('/arthi/:id', function(req, res){
    const id = req.params.id
    res.send(' Wow Arthi! ' + id)
})
app.listen(9000, function(req,res){
    console.log('Running.... ')
});