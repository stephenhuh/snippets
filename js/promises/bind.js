var add3 = function(numToAdd) {
  return numToAdd + 3;
}

console.log("regular add3 function",add3(5));
let newFunction = add3.bind(null, 4);

console.log("this is a bound function",newFunction());

console.log("this is calling the new bound function with value of two:",newFunction(2));

console.log("interestingly it seems like it wont accept the newly passed in argument. this is a way of implementing currying and partial application");

var addTwoNumbers = function(first, second){
  return first+second;
}

console.log("binding two numbers", addTwoNumbers.bind(null,3,4)());


