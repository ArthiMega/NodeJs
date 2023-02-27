var calc = require('./calc')
var fs = require('fs');
fs.readFile('calc.js','utf8',function(err,data){
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
fs.writeFile('newFile','console .log(arthi)' , function(err){
    console.log('data wrote');
})
fs.appendFile('newFile','arthi="developer"',function(err){
    console.log('data appended')
})
fs.unlink('newFile',function(err){
    console.log("Deleted")  
})
result = calc.add(2,3)
console.log(calc.cars);

console.log("result of add is",result)        