const myPromise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Success!")
  },2000)
})
myPromise.then(
  (result)=>{
    console.log(result)
    return 'Second Promise'
    // throw new Error("Error!")
  },
  (err)=>{
    console.log(err)
  }
)
.then((result)=>{
  console.log(result)
  throw new Error("Error!")
})
.catch((error)=>{
  console.log(error);
})
