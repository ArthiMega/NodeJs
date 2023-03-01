const https = require('https')
// axios
//     .post('http://localhost:3000/data',{
//         todo:'Buy the milk'
//     })
//     .then(res=>{
//         console.log(`statusCode: ${res.status}`)
//         console.log(res)
//     })
//     .catch(error=>{
//         console.error(error);
//     })
const data = JSON.stringify({
    todo: 'Buy cell phone'
})

const options = {
    hostname: 'http://localhost:3000',
    port: 443,
    path:'/data',
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length':data.length
    }
}
const req = https.request(options, res=>{
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data',d=>{
        process.stdout.write(d)
    })
})

req.on('error',error=>{
    console.error(error);
})

req.write(data)
req.end()