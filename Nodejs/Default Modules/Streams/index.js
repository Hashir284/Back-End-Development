const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// GET Route
app.get('/', (req, res) => {
    // File ka path set karein (jo file aapne bhejni hai)
    const filePath = path.join(__dirname, 'sample.txt'); // Yahan apni file ka naam dein

    // 1. Check karein ke file exist karti hai ya nahi
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('File nahi mili!');
    }

    // 2. Header set karein ke kis type ki file ja rahi hai
    res.setHeader('Content-Type', 'text/plain'); // Agar PDF ho toh 'application/pdf', image ho toh 'image/jpeg'
    // res.setHeader('Content-Disposition', 'attachment; filename="sample.txt"'); // Agar download karwana ho

    // 3. Readable Stream banayein (Buffer chunks ke sath)
    const fileStream = fs.createReadStream(filePath, { 
        highWaterMark: 64 * 1024 // 64KB ka chunk/buffer size
    });

    // 4. Stream ko seedha 'res' mein pipe kar dein
    // fileStream.pipe(res);

    // 5. Agar beech mein koi error aaye
    fileStream.on('data', (chunk) => {
        console.log('Stream Error:', res.write(chunk));
    });
    fileStream.on('end', () => res.send());
    fileStream.on('error', (err) => {
        console.error('Stream Error:', err);
        res.status(500).send('Server mein koi masla aa gaya!');
    });
});


app.get('/bigfile', (req,res)=>{
    // Readable stream (data parhnay ke liye)
const readableStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8', highWaterMark: 64 * 1024 }); // 64KB ka chunk
// Writable stream (data likhnay ke liye)
const writableStream = fs.createWriteStream('create.txt');
// .pipe() method automatic chunks ko read karke write stream mein bhej deta hai
readableStream.pipe(writableStream);
console.log('Stream ke zariye file copy ho rahi hai...');
res.send('Ok')
})

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});