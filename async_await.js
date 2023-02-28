const fetch = require('node-fetch');
// const http


const doSomethingAsync= ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("the promise has been resolved!"),3000)
    })
}

const doSomething = async()=>{
    console.log(await doSomethingAsync())
}

console.log("Before")
doSomething()
console.log("After")

const aFunction = async () => {
    return 'test'
  }
