setImmediate(()=>{
    console.log('setImmediate')
})
setImmediate(()=>{
    console.log('setImmediate1')
})
setTimeout(()=>{
    console.log('setTimeout')
},0)
process.nextTick(()=>{
   console.log('nextClick');
   
process.nextTick(()=>{
    console.log('nextClick1')
})
})