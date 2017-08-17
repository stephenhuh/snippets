var _ = require('lodash');
var foo = ['one','two','three'];
var [one,two,three] = foo;
console.log(one,two,three);
var [two,one,three] = foo;
console.log(one,two,three);

let list = 
  [{search_score: 3, name: 'hello', origin: 'two'},
   {search_score: 4, name: 'bye', origin: 'one'},
   {search_score: 5, name: 'yo', origin: 'two'},
   {search_score: 5, name: 'yo', origin: 'three'},
   {search_score: 5, name: 'bi', origin: 'one'}
];

let newList = _.keyBy(list, (el) => {
  return el.origin;
})

console.log(newList);

let transformList = _.groupBy(list, (el) => {
  console.log("intrnsform el", el.origin);
  return el.origin; 
})

console.log(transformList);
