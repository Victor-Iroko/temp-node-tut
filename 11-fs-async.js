// The asynchrnonous way to read and write file
const {readFile, writeFile} = require('fs')

// specify a filepath, encoding and a callback function to check for error
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(result) // if there's no error the text would be read into the result variable
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(result)
        const second = result
    
    // parameter are the same with writesync but with a callback function since its async
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})

