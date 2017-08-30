//forEach
function forEachEx() {
  var array = [1,2,3,4];
  array.forEach((el,idx,arr)=>{
    arr[idx] = el * 2;
  });
  return array;
}
console.log(forEachEx());

//Map
function mapEx(arr){
  return arr.map((el, idx, arr) => {
    return el * 2; 
  })
}
console.log(mapEx([1,2,3,4]));

//forIn
function forInEx() {
  var object = {
    one : 1,
    two : 2,
    three : 3,
    four : 4
  };

  for (let key in object) {
    if (object.hasOwnProperty(key)){
      console.log("key", object[key]); 
    }
  }
}
forInEx();


//for
function forEx() {
  var array = [1,2,3,4];
  var length = array.length;
  for (let i = 0; i < length; i++){
    console.log(array[i] * 2); 
  }
}
forEx();

//for of...?
function forOf() {
  var myIterable = {};
  myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }
  for (let value of myIterable){
    console.log(value * 2); 
  }
}
forOf();


