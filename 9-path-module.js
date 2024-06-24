// the built-in module for file path

const { log } = require('console')
const path = require('path')

console.log(path.sep) // returns the file path seperator that the file path uses 

const filePath = path.join('/content', 'subfolder', 'test.txt') // Join all arguments together and normalize the resulting path.
console.log(filePath)

const base = path.basename(filePath) // returns the base name (which in this case is test.txt)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') 
// returns the absolute path of the file or folder specified 
// (__dirname is a global variable that points to that directory)
console.log(absolute);
  