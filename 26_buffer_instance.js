/*
buf.length
buf.toString()
buf.fill()
buf.equals()
buf.indexof()
buf.copy()
*/
const buf = Buffer.from('This is a test!')

console.log(buf.length);

const buf1 = Buffer.alloc(10)
buf1[0] = 2
console.log(buf1.length);


console.log(buf.toString());
console.log(buf.toString('base64'));

