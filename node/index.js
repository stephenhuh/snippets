const obj1 = require('./obj');
const obj2 = require('./obj');
console.log('preinc obj1', obj1.num);
obj1.increment();
console.log('post obj1', obj1.num);
console.log('pre obj2', obj2.num);
