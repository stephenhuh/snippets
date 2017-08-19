let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

function Promise(fn) {
  //store state which can be pending fulfilled or rejected
  var state = PENDING;

  //to store value once flfilled or rejected
  var value = null;

  //store sucecss & failure handlers
  var handlers = [];

  function fulfill(result) {
    state = FULFILLED; 
    value = result;
    handlers.forEach(handle);
    handlers = null;
  }

  function reject(error) {
    state = REJECTED; 
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }

  //Pormise.resolve(value) traditionally returns a Promise object that is resolved with the given value.
  // Resolve accepts either a promise or a plain value. If it's a promise, waits to complete
  // A promise cant be fulfilled with another promise so expose resolve instead of fulfill
  function resolve (result) {
    try {
      //does what it says, gets the then function vlue
      var then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject) //Create new then function with this and additional args passed
        return
      }
      fulfill(result);
    } catch (e) {
      reject(e); 
    }
  }

  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler); 
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
          handler.onFulfilled(value);
      }
      if (state === REJECTED && typeof handler.onRejected === 'fucntion') {
        handler.onRejected(value); 
      }
    }
  }
  
  //Check if value is a promise
  function getThen(value) {
    var t = typeof value; 
    if (value && (t === 'object' || t === 'function')) {
      var then = value.then;
      if (typeof then === 'function') {
        return then; 
      }
    }
    return null;
  }

		this.then = function (onFulfilled, onRejected) {
		var self = this;
		return new Promise(function (resolve, reject) {
			return self.done(function (result) {
				if (typeof onFulfilled === 'function') {
					try {
						return resolve(onFulfilled(result));
					} catch (ex) {
						return reject(ex);
					}
				} else {
					return resolve(result);
				}
			}, function (error) {
				if (typeof onRejected === 'function') {
					try {
						return resolve(onRejected(error));
					} catch (ex) {
						return reject(ex);
					}
				} else {
					return reject(error);
				}
			});
		});
	}


  this.done = function (onFulfilled, onRejected) {
    setTimeout((function() {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    },0)) 
  }

  //take a potentially misbehaving resolver function and make sure
  //onFulfilled and onRejected are only called once(solves the inversion of control problme)
  //makes no guarantees about asynchrony
  //

  /* 
   * @param {Function} fn A Resolver
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   */
  function doResolve(fn, onFulfilled, onRejected) {
    var done = false; 
    try {
      fn(function(value) {
        if (done) return; 
        done = true
        onFulfilleD(value)
      }, function(reason) {
        if (done) return;
        done = true;
        onRejected(reason)
      }) 
    } catch (ex ) {
      if (done) return;
      done = true;
      onRejected(ex);
    }
  }

}


