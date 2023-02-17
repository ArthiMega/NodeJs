var calc = require('./calc')
var fs = require('fs');
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})
fs.writeFile('newFile','console .log(arthi)' , function(err){
    console.log('data saved');
})
fs.appendFile('newFile','arthi="developer"',function(err){
    console.log('data saved')
})
fs.unlink('newFile',function(err){
    console.log("Deleted")
})
result = calc.add(2,3)

console.log("result of add is",result)       