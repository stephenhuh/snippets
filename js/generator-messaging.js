function *main() {
  yield 1;
  yield 2;
  yield 3;
  return "doneval";
}

var it = main();
console.log(it.next()); //note that it returns an object with done as well
console.log(it.next());
console.log(it.next());
console.log(it.next());
