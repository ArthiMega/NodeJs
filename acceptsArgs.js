// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`)
// })
const args = require('minimist')( process.argv.slice(2));
// console.log(args['name']); //  node acceptsArgs.js --name=arthi
const x = 'x'
const y = 'y'
console.log(x,y)
console.log("Hi, My name is %s and am %i years old","Arthi",21.6);
// %s --> formate string
// %d --> formate number
// %i --> formate integer part only
// %o --> formate object 

// console.log('%o',Number);
// console.clear()

// ==================== COUNT ======================

const a = 1
const b = 2
const c = 3

console.count('Tha value of is '+a+ ' and ha sbeen checked .. how many times?')
console.count('Tha value of is '+b+ ' and ha sbeen checked .. how many times?')
console.count('Tha value of is '+a+ ' and ha sbeen checked .. how many times?')
// it will checks a value how menu times logged in tha console

const oranges = ['orange', 'orange']
const apples = ['just one apple']

oranges.forEach(fruit=>{
    console.count(fruit)
})
apples.forEach(fruit=>{
    console.count(fruit)
})

// ==================RESET COUNTING =====================
console.countReset('orange')

oranges.forEach(fruit=>{
    console.count(fruit)
})

// ==================== TRACE =============================
const function1 = ()=>console.trace()
const function2 = ()=> function1()
function2()