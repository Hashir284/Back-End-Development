const fs = require('fs')

// Asynch
fs.readFile('info.txt', 'utf8', (err, data)=>{
    if (err) {
        console.log('Error:', err);
    } else {
        console.log(data);
    }
})

// Synch
const data2 = fs.readFileSync('info.txt','utf8')
console.log('File Content:', data2);

// Write File
fs.writeFile('text.txt', 'My name is hashir', (err)=>{
    if (err) {
        console.log(err);
    }
    else console.log('File Written Successfully')
})

// Append Data
fs.appendFile('text.txt', '\nMy name is hashir', (err)=>{
    if (err) {
        console.log(err);
    }
    else console.log('File Append Successfully')
})

// Delete File
// fs.unlink('ttt.txt',(err)=>{
//     if (err) console.log(err);
//     else console.log('File deleted successfully ');    
// })

// Rename File
fs.rename('text.txt', 'Text.txt', (err)=>{
    if(err)console.log(err);
    else console.log('File Rename Successfully');
})

// Sync (Synchronous) Methods: Ye execution ko block karte hain, yani jab tak file 
// ka kaam poora nahi hota, aage ka code nahi chalta.

// Async (Asynchronous) Methods: Ye non-blocking hote hain, file ka kaam background 
// mein hota rehta hai aur baki code aage execute ho jata hai.

// Naming Pattern: Async methods normal naam se hote hain (jaise readFile,
// writeFile), jabki Sync methods ke aakhir mein Sync laga hota hai (jaise 
// readFileSync, writeFileSync).

// Error & Data Handling: Sync methods direct output return karte hain aur try...
// catch use karte hain, jabki Async methods callback functions ya async/await use 
// karte hain.

// Best Practice: Real-world Node.js backend servers aur APIs mein hamesha Async
// methods hi use hote hain taake server hang ya block na ho.