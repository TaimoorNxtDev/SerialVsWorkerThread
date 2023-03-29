const crypto = require('crypto')

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


for (let index = 0; index < limit; index++) {
    crypto.createHash('sha256').update(someRandomStrings1[index]).digest('hex');

}


for (let index = 0; index < limit; index++) {
    crypto.createHash('sha256').update(someRandomStrings2[index]).digest('hex');

}

console.timeEnd("program");
