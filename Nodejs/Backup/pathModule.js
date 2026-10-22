const path = require('path')
// console.log(__dirname);
console.log(__filename);

const filePath = 'D:\Development Work\Back-End-Development\Nodejs\Backup\pathModule.js'

// console.log(path.basename(filePath))
// console.log(path.basename(filePath, '.js'))

// console.log(path.dirname(filePath))

// console.log(path.extname(filePath))

// console.log(path.join('/1','/2','app.js'));

// console.log(path.resolve('Backup','pathModule.js'));

// console.log(path.parse(path.join('Backup','pathModule.js')));


//Real World Example
const fs = require('fs')
const filePath2 = path.join(__dirname, 'info.txt')
fs.writeFile(filePath2, 'Hello', (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File successfully created!');
    }
})
fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})