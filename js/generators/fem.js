function* run() {
  console.log("starting");
  var x = 1 + (yield getData(10));
  console.log("middle");
  var y = 1 + (yield getData(30));
  console.log("end");
  var answer = (yield getData(
    "Meaning of life: " + (x + y) 
  ));
  console.log(answer);
}

let getData = function(val){
    setTimeout(function() {
      console.log("now here");
      it.next(val);
  },1000);
}

it = run(); //create the generator
it.next(); //kick off

