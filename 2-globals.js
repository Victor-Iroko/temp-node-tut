// GLOBALS - NO WINDOW  !!

// __dirname = path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// These are variables acessible at any point in a code 


console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)
//console log is also available globally

setInterval(() => { // After every second (1000 millisecond) Hello world will be displayed onto the console
    console.log("Hello world")
}, 1000);