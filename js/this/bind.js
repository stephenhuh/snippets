a = "global this";

var x = function() {
  this.state = 3;
  this.getState = function(){
    console.log("from getstate, this is...", this.state);
  }
}

w = new x();
console.log(w.state);

var y = function() {
  this.state = 4;
}

w.getState.bind(y)();

function f(){
  return this.a;
}

console.log(f());
console.log(f.bind({a: "onebind"})());
console.log(f.bind({a: "twobind"})()); //this works
console.log(f.bind({a: "twobind"}).bind({a:"threebind"})()); //this however does not
//because bind is permanent
//once bound, always bound

