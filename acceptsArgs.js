// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`)

// const { default: chalk } = require('chalk');

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

// ================ CALCULATE THE TIME SPENT==================

const myFunction = ()=>{
    for(let i= 0; i < 100; i++){
        console.log(i)
    }
}
const measureMyFunction = ()=>{
    console.time('myFunction()')
    myFunction()
    console.timeEnd('myFunction()')
}
measureMyFunction()

// ====================STDOUT and STDERR  ===========================

console.error("Your ego");
console.log('\x1b[33m%s\x1b[0m', 'hi!')

//  ==============COLOR THE output==================================

// const chalk = require('chalk')
// console.log(chalk.yellow('hi!'))
// ==================PROGRESS BAR =========================
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10})
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

// ?=============== ACCEPTS INPUTS FROM COMMEND LINE   (READ LINE) ===================
const  readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question(`What is your name?`,name=>{
    console.log(`Hi di pattu thangam chellam vairom etc,. ${name}!`)
    readline.close()
})

// ============================= ACCEPTS INPUTS FROM COMMEND LINE  (INQUIRER) =======================
// import inquirer from 'inquirer.js';

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })