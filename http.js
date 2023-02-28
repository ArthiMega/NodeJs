// const http = require('http')
// const hostName = '127.0.0.1'
// const port = 8080;
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain')
//     res.end('Hello World\n');
// });
// server.listen(port,hostName,()=>{
//     console.log(`server runnig at http://${hostName}:${port}`)
// });
const https = require('https')
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    process.stdout.write(d)
  })
})
req.on('error', error => {
  console.error(error)
})
req.end()

