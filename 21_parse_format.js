const {parse,format} = require('path')
const filePath = 'user/local/node_module/n/tree.txt'
let obj = parse(filePath)
console.log(obj);
console.log(format(obj));
