const assert = require('assert');
/**
 * next: A zero arguments function that returns an object with at least the following two properties only needs to return done, value
 */
const iteratorProtocolObj = {
  next: function() {
    return {
      done: false,
      value: 'dummyval',
      etc : 'test'
    }
  },
}

let i = 0;
while (i < 5) {
  console.log('iterating');
  console.log(iteratorProtocolObj.next());
  i++;
}

/** doesnt impement the iterable protocol **/
assert.throws(() => {
  for (let x of iteratorProtocolObj) {
    console.log(x);
  }
});

const iterable = Object.assign({
  [Symbol.iterator]: function () {return this;}
}, iteratorProtocolObj);



// Now it does.
for (const val of iterable) {
  console.log('iterable protocol', val);
  break;
}

iterable[Symbol.iterator] = function() {
  let i = 3;
  while (i--) {
    return this;
  }
}


