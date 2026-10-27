const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// GET Route
app.get('/', (req, res) => {
    let file = path.join(__dirname, 'sample.txt')
    res.setHeader('Content-Type', 'text/plain')
    // res.send('ok')
    let fileGet = fs.createReadStream(file, {
        highWaterMark: 64 * 1024, // 64kb
        encoding: 'utf-8'
    })
    fileGet.pipe(res)
    // fileGet.on('data', (chunk)=>res.write(chunk))
    // fileGet.on('end', ()=>res.end())
    fileGet.on('error', (err) => {
        console.error('Read Error:', err);
        res.status(500).send('Server Error');
    });
})

app.get('/bigfile', (req, res) => {
    let BigFile = path.join(__dirname, 'bigfile.txt')
    let copyFile = path.join(__dirname, 'copyfile.txt')
    let fileRead = fs.createReadStream(BigFile, 'utf-8')
    let createFile = fs.createWriteStream(copyFile, 'utf-8')
    // fileRead.pipe(createFile)
    fileRead.on('data', (chunk) => createFile.write(chunk))
    fileRead.on('end', () => createFile.end())
    fileRead.on('error', (err) => console.log(err))
    fileRead.on('error', (err) => console.log(err))
    res.send('File copying background mein shuru ho chuki hai!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});