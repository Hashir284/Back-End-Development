import fs from 'fs'
console.log(fs);

fs.writeFileSync('harry.txt', 'Harry is good')
fs.writeFile('harry.txt', 'Harry is a good', (err) => {
    if (err) {
        console.log(err)
        return
    }
    fs.readFile('harry.txt', (error, data) => {
        console.log(error, data)
        console.log(error, data.toString())
    })
    fs.readFile('harry.txt', 'utf8', (error, data) => {
        console.log(error, data)
        console.log(error, data.toString())
    })
    console.log("done");
})

fs.appendFile('harry.txt', 'Append', (err, data) => { console.log(data); })
