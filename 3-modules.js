// CommonJS, every file is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names') 
const sayHi = require('./5-utils')
// if you're requiring from your modules always start with ./
// If the modules you're requiring from are two levels high then it will be ../
// If the modules are ones you downloaded or from other sources then just use the quotation marks ''
// the variable name here must be the same as the one you exported with (especially if its just a single value)
const data = require('./6-alternative-flavor.js')
require('./7-mind-granade.js') // executes whatsever in that module

console.log(names)

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)

console.log(data)
