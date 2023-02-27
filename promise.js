let done  = true
const isItDoneYet =  new Promise((resolve,reject)=>{
    if(done){
        const workDone = "here is the work i done"
        resolve(workDone)
    }
    else{
        const why = "Still pending something went wrong!"
        reject(why)
    }
})
const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('./calc.js')
.then(data => console.log(data))
.catch(err => console.error(err))

// const f1 = fetch('./db.json')
// const f2 = fetch('./db.json')
// Promise.all([f1,f2]).then(res=>{
//     console.log("Array of results", res)
// })
// .catch(err=>{
//     console.error(err)
// })

const first = new Promise((resolve, reject)=>{
    setTimeout(resolve,500,'first')
})
const secont = new Promise((resolve,reject))