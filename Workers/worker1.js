const { workerData, parentPort } = require('worker_threads');
const crypto = require('crypto')

parentPort.on('message', (message) => {
    for (let index = 0; index < message.limit; index++) {
        crypto.createHash('sha256').update(message.someHashedStrings[index]).digest('hex');    
    }
    
    // Send a message back to the main thread
    parentPort.postMessage('done');
});
