//0 is pending
//1 is fulfileld
//2 is rejected
const sPromise = function(fn, resolve, reject){
  this.state = 0;
  this.fn = fn;
  this.value = null;

  function getState() {

    return this.state; 
  }

  function transitionState(currentState) {
  
  }



  function getThen() {
  }

   /**
    * @param {onFulfilled} function that is passed into then from implementer side
    * @param {onRejected}
    * @returns {undefined}
    */
  //2.2.1 from A+ spec
  this.then = function(onFulfilled, onRejected) {
    if (typeof onFulfilled === 'function') {
      fn.bind(null, onFulfilled, onRejected)();
      return this;
    } 
    if (typeof onRejected === 'function') {
    
    }
  }

  /* TODO: find out why this wont work without the onRejected above */
  this.catch = function(onRejected) {
    fn.bind(null, null, onRejected)();
    console.log("ending not chainable");
  }
  */

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
.then(
  function(res) {
    console.log("resolved with then", res);
  }, function(err){
    console.log("rejected with err as second calback", err);
  })
  .catch(function(err){
    console.log("rejected with err", err);
  })

