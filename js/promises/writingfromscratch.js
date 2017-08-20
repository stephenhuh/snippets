//0 is pending
//1 is fulfileld
//2 is rejected
const sPromise = function(fn, resolve, reject){
  this.state = 0;
  this.fn = fn;

  function getThen() {
     
  }

   /**
    * @param {onFulfilled} function that is passed into then from implementer side
    * @param {onRejected}
    * @returns {undefined}
    */

  this.then = function(onFulfilled, onRejected) {
    fn.bind(null, onFulfilled)();
    return this;
  }

  this.catch = function(onRejected) {
    fn.bind(null, function() {console.log("rando");} , onRejected)();
    console.log("ending not chainable");
  }

}

const isItThree = function(number) {
  return new sPromise(
    function(resolve, reject) {
      setTimeout(function() {
        number === 3 ? resolve("yes!") : reject("no!");
        return;
      }, 3000);
  });
}

isItThree(4)
  .then(function(res) {
    console.log("resolved with then", res);
  })
  .catch(function(err){
    console.log("rejected with err", err);
  })

