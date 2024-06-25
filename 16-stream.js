// STREAMS
// Writeable
// Readable
// Duplex (Both reading and writing)
// Transform (Data can be modified when writing or reading, its a special type of duplex stream)
// Transform is commonly used for compression, encryption or parsing.

// Streams are used to read or write sequentialy 

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})
// highwatermark control the size of the chunck of data it reads

stream.on('data', (result) => {
    console.log(result); // it reads in 64kb at a time (by default)
})

stream.on('error', (err) => console.log(err))

