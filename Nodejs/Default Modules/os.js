// Node.js ka os module aapko aapke computer ya server ke operating system
// (Windows, Linux, macOS) aur hardware ki details (jaise RAM, CPU, Network) nikal kar deta hai.

const os = require('os');

// 1. OS ki Platform aur Architecture check karna
console.log('OS Platform:', os.platform()); // e.g., win32
console.log('CPU Architecture:', os.arch()); // e.g., x64

// 2. RAM (Memory) ka hisaab lagana (Bytes ko GB mein convert karne ke liye math lagate hain)
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
// 1 KB (Kilobyte) = 1024 Bytes
// 1 MB (Megabyte) = 1024 KB (yaani 1024 * 1024 Bytes)
// 1 GB (Gigabyte) = 1024 MB (yaani 1024 * 1024 * 1024 Bytes)
console.log(`Free RAM: ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log(`Total RAM: ${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);

// 3. User Home Directory
console.log('Home Directory:', os.homedir());

// 4. System Uptime (Computer kitni dair se on hai)
console.log('System Uptime (Minutes):', (os.uptime() / 60).toFixed(2));

// 5. CPU Details
console.log('CPU Info:', os.cpus(), 'Cores available');