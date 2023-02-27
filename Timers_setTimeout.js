setTimeout(()=>{
    console.log("Hi")
},2000)

setTimeout(()=>{
    console.log("Come here!")
},200)

const myFunction = (param1, param2)=>{
    console.log("First parameter is",param1)
    console.log("Second parameter is", param2)
    setTimeout(myFunction, 1000, 3,4)
}

setTimeout(myFunction, 4000, 1,2);

const id = setTimeout(myFunction, 4000, 1, 2)
clearTimeout(id)

// =======================ZERO DELAY ========================

setTimeout(()=>{
    console.log("After")
},0)
console.log("Before")