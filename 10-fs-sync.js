// The File System module
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8') // specify the filepath and encoding
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// here you specify the filepath and what you want to write
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)

writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // appends to the file instead of overwriting it
)


