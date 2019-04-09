const assert = require('assert');
const max = Number.MAX_SAFE_INTEGER;

console.log('max safe is 2 ^ 53 - 1');
assert(max === Math.pow(2,53) - 1);

const maxPlusOne = max + 1;
const maxPlusTwo = max + 2;

console.log('2^53 + 1 hits a ceiling')
assert(maxPlusOne === maxPlusTwo);

