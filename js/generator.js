function* gen(){
  console.log("Hello");
  yield; //pause here
  console.log("World");
}

var it = gen(); //calling a generator produces an iterator
it.next(); 
console.log("pause");
it.next();
