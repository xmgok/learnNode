const fs = require('fs')

// fs.readFile('./32_readfile.js','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })

const data = fs.readFileSync('./23_paths.js','utf8')
console.log(data);