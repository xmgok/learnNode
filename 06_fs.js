const fs = require('fs')
// 文件读写 
const result = fs.readFile('./06_fs.js',(err,data)=>{
    if(err){
        console.log('err',err)
    }else{
         console.log('data',data.toString())
    }
   

})

console.log(result)