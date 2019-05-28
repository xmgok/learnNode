setImmediate(()=>{
    console.log('setImmediate')
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