const { Worker } = require('worker_threads');
const path = require('path')



function generateRandomString(lengthOfString) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < lengthOfString; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//10000000
console.time("program")
const limit = 10000000
let someRandomStrings1 = []
let someRandomStrings2 = []
for (let i = 0; i < limit; i++) {
    someRandomStrings1.push(generateRandomString(10))
    someRandomStrings2.push(generateRandomString(10))
}
const newPath = path.join(__dirname, './Workers', '/worker1.js')
const newPath2 = path.join(__dirname, './Workers', '/worker2.js')

const worker1 = new Worker(newPath);
worker1.postMessage({ someHashedStrings: someRandomStrings1, limit });
worker1.on('message', (message) => {
    if (message === 'done') {
        worker1.terminate();
    }
});


const worker2 = new Worker(newPath2);
worker2.postMessage({ someHashedStrings: someRandomStrings1, limit });
worker2.on('message', (message) => {
    if (message === 'done') {
        worker2.terminate();
    }
});

Promise.all([
    new Promise((resolve) => worker1.on('exit', resolve)),
    new Promise((resolve) => worker2.on('exit', resolve)),
]).then(() => {
    console.timeEnd("program");

});

  // console.timeEnd("program");
