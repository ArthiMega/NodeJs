const fs = require('fs')
fs.open('./hello.txt','w+',(err,fd)=>{
    console.log(fd)
    console.log(err)
})
// fs.open('./hello.txt','')

try{
    const fd = fs.openSync('./hello.txt','r')
    console.log(fd)
}catch(err){
    console.error(err);
}

// ===========FILE STATES=============

fs.stat('./hello.txt',(err,stats)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
})
// ==============STATE Sync --========
try{
    const stats = fs.statSync('./hello.txt')
    // console.log(stats)
}catch(err){
    console.error(err);
}