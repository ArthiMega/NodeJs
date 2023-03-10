const myfunction = ()=>{
 return new Promise(res=>{
    setTimeout(()=>{
        console.log("Hi Hello!")
    },3000)
 })
}

const assyncFunction = async()=>{
    console.log(await myfunction())
}