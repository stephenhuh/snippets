let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

function Promise() {
  var state = PENDING;

  var value = null;

  var handlers = [];

  function fulfill(result) {
    state = FULFILLED; 
    value = result;
  }

  function reject(error) {
    state = REJECTED; 
    value = error;
  }

  //Pormise.resolve(value) traditionally returns a Promise object that is resolved with the given value.
  function resolve (result) {
    try {
      var the = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject)
        return
      }
      fulfill(result);
    } catch (e) {
      reject(e); 
    }
  }
}


