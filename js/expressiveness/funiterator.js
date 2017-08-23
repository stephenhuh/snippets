let stub = {
  'CA' : [1,2,3,4,5],
  'DE' : [6,7,8,9,10],
  'GA' : [11,12,13,14,15]
}
//Transform this into an array of labels and items
//['CA', 1,2,3,4,5, 'DE',6,7,8,9,10, 'GA', 11,12,13,14,15]

//Simple
let res = [];
for (let key in stub) {
  res.push(key);
  stub[key].forEach((el,idx,arr) => {
    res.push(el); 
  })
}
console.log(res);

//Using Iterators

let keys = Object.keys(stub);
let resTwo = [];
console.log(keys);

//Errrrr
let string = "hello there";
var it = string[Symbol.iterator]();
console.log("it is...", it);

//Implements the iterator protocol by itself
for (let thing of it) {
  console.log(thing);
}




