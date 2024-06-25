// npm - global command, comes with node

// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>
// i is short for install 

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)
// NOTE: You can use npx in the place of global dependency installation

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


//the .gitignore file specifices the files or folders for git to ignore when pushing to the remote repository.
// You usually ignore the node_modules folder since its always to large

// if you clone a node app from github and run `npm install` all the dependencies specified in `package.json` will be installed automatically


// Dev dependencies
// DevDependencies are a special category of npm packages that are only needed during the development phase of your project. 
// Unlike regular dependencies required to run your application in production, 
// devDependencies are used for tasks like testing, building, and local development.
// npm i <packagename> -D
// npm i <packagename> --save-dev

// In the package.json file under 'scripts' you can specify 
// "start": "node <filename>.js"
// to avoid running node <filename.js> from the terminal everytime
// you can just run `npm start`

// under scripts you can also specify
// "dev": "nodemon app.js" (nodemon is a development package to help restart the application automatically)
// but to run it it'll be `npm run dev`

console.log("Hello people")

// to uninstall a package 
// npm uninstall <packagename>


// Package-lock.json specifies not only the dependency versions, but also the versions of the depedencies that the main dependencies are relying on
// in versioning for example `4.17.20` the first number specifies major change i.e. it won't be backwards compatible an you should expect some breaking changes
// the middle number represents a minor change i.e. it should be bacwards compatible even though there are changes
// the last number is for bug fixes 




