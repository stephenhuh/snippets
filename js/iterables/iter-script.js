//forEach
function forEachEx() {
  var sum = 0;
  var array = [1,2,3,4];
  array.forEach((el,idx) => {
    sum += el; 
  })
  return sum;
}
console.log(forEachEx());

//Map

function mapEx(arr){
  return arr.map((el, idx, arr) =>{
    return el * 2; 
  }) 
}
console.log(mapEx([1,2,3,4]));

//forIn
function forInEx() {
  var object = {
    one : 1,
    two : 2
  }

  for (let key in object) {
    if (object.hasOwnProperty(key))
    console.log("key", object[key]);
  }
}


//for
/*
function forEx() {


}
forEx();
*/

//for of...?
/*
function forOf() {
  var myIterable = {};
  myIterable[Symbol.iterator] = function* () {
      yield 1;
      yield 2;
      yield 3;
  };
  for (let value of myIterable) { 
      console.log(value); 
      }
}
*/


