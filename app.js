// npm - global command, comes with node

// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>
// i is short for install 

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// all installed packages are stores in the node-modules folder\


// using one of the packages
const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items) // flattens the array

console.log(newItems);
