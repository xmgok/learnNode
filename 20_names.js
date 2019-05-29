const {dirname,basename,extname} = require('path')
const filePath = '/user/local/bin/index.html'
console.log(dirname(filePath));
console.log(basename(filePath));
console.log(extname(filePath));
