// built in module 
const os = require('os');
console.log("OS Platform:", os.platform());
console.log("Free Memory:", os.freemem());

// local module 
// const add = require('./math.js').default
const { add } = require('./math.js')
console.log("Addition Result:", add(5, 10));

// third party module 
const chalk = require('chalk');
console.log(chalk.red("Hello, World!"));
// console.log(chalk);