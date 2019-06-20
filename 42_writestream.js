const fs = require('fs')

const ws = fs.createWriteStream('./test.txt')
 const dit= setInterval(()=>{
    num =parseInt(Math.random()*10)
    if(num<7){
         ws.write(num+'')
    }else{
        clearInterval(dit)
        ws.end()
    }
   
},200)
ws.on('finish',()=>{
    console.log('done!');
    
})