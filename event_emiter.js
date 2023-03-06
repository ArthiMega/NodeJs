const EventEmitter = require('events')
const eventEmiter = new EventEmitter()

eventEmiter.on('message',function(){
    console.log("Hi")
})
eventEmiter.emit('message')
eventEmiter.setMaxListeners(60)
console.log(eventEmiter.eventNames())
console.log(eventEmiter.getMaxListeners())
console.log(eventEmiter.listenerCount('message'))
console.log(eventEmiter.listeners('message'))