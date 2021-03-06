let _ = require('lodash');
let fp = require('lodash/fp');

function square(n){
  return n*n;
}

function add(a, b) {
  return a + b;
}

let addSquare = _.flow([add, square]);
let res = addSquare(3,4);

console.log(res);

let addSquarePipe = fp.pipe([add,square]);
let resTwo = addSquarePipe(3,4);

if (resTwo === res) {
  console.log("ya theyre the same");
}

let addSquareCompose = fp.compose([add,square]);
let resThree = addSquareCompose(3,4);
console.log(resThree);

if (resThree === resTwo) {
  console.log("same as compose");
} else {
  console.log("not on compose", resThree);
}
