const EventEmitter = require('events')

class  CustimEvent extends EventEmitter{}

const ce = new CustimEvent()
ce.on('test',()=>{
    console.log('this is a test!');
    
})
setInterval(()=>{
    ce.emit('test')
},500)