_ = require('Ramda');
var Container = function(x){
  this.__value = x;
} 

Container.of = function(x) { return new Container(x)}

console.log(Container.of(3))

r = Container.of(Container.of({name:'yoda'}))
console.log(r)

Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
}

let res = Container.of(2).map(function(two) {
  return two + 2;
})

console.log(res);

chain = Container.of("bombs").map(_.concat(' away')).map(_.prop('length'));
//Notice it stays inside container but type does change
console.log(chain) 


let Maybe = function(x) {
  this.__value = x;
}

Maybe.of = function(x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined)
}

/*
Maybe.prototype.map = function(f) {
  return this.isNothing(this.__value) ? Maybe.of(f(this.__value)) : Maybe.of(0)
}
*/

/*
Maybe.prototype.map = function(f) {
  return this.isNothing(this.__value) ? Maybe.of(null) : Maybe.of(f(this.__value));
}

let func = Maybe.of('Malkovich Malkovich').map(match(/a/ig));
console.log(func);

let func2 = Maybe.of(null).map(match(/a/ig))
console.log(func2);
*/


var safeHead = function(xs) {
  return Maybe.of(xs[0]);
}

var streetName = _.compose(_.map(_.prop('street')), safeHead, _.prop('addresses'))

let res4 = streetName({
  addresses:[]
})

console.log("res4", res4)
let res5  =streetName({
  addresses : [ {
    street : 'Shady Ln.' ,
    number : 4201
  }],
})
console.log( res5)


var maybe = _.curry(function(x, f, m) {
  return m.isNothing() ? x : f(m.__value);
})


/*
var getTwenty = _.compose(maybe("Youre broke", finishTransaction), withdraw(20))
*/
