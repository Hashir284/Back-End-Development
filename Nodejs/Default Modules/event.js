const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// Event Listener register karna
myEmitter.on('userLoggedIn', (username) => {
    console.log(`${username} ne login kiya!`);
});

// Same event name ko 3 baar emit karna
myEmitter.emit('userLoggedIn', 'Ali');
myEmitter.emit('userLoggedIn', 'Sara');
myEmitter.emit('userLoggedIn', 'Ahmed');

myEmitter.once('startProcess', () => {
    console.log('Yeh sirf 1 baar chalega!');
});
myEmitter.emit('startProcess'); // Executed!
myEmitter.emit('startProcess'); // Ignore ho jayega
myEmitter.emit('startProcess'); // Ignore ho jayega

// Listener 1
myEmitter.on('saveData', () => {
    console.log('1. Database update ho gaya.');
});
// Listener 2
myEmitter.on('saveData', () => {
    console.log('2. Email notification bhej di.');
});
// Jab aap 1 baar emit karenge, dono listeners order mein chalenge
myEmitter.emit('saveData');

// Synchronous Execution: By default, Node.js ke event listeners synchronous tarike se execution complete
// karte hain jis order mein woh register hue hote hain.
// Infinite Loop Se Bachein: Agar aap listener function ke andar hi wahi event emit kar denge 
// (myEmitter.on('test', () => myEmitter.emit('test'))), toh app infinite loop mein chali jayegi aur Maximum call stack size exceeded error aaye gi.