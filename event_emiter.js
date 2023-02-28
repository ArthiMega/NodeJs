const EventEmitter = require('events')
const eventEmiter = new EventEmitter()

eventEmiter.on('message',function(){
    console.log("Hi")
})
eventEmiter.emit('message')