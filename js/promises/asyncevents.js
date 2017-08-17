const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


var emitter = new MyEmitter();

emitter.on('event',()=>{
  console.log('some event has occurred');
});

emitter.emit('event');

//Callback Inversion of Control
function chargeCustomerInvertedControl(cost, cb) {
  let balance = 1000;
  setTimeout(()=>{
    balance -= cost;
    if (balance > 0) {
      //We have no clue if this might happen
      cb(); 
      cb();
      cb();
    } else {
      //We have no clue if this might happen
      cb(error); 
    }
  }, 10000)
}

chargeCustomerInvertedControl(43, function sendSuccessEmail(credit) {
  //Assume credit balance is always 400
  console.log("sent email with credit!!", credit);
});


//Event Emitter Pattern
function chargeCustomer(cost){
  //do something that takes a while
  const emitterTwo = new MyEmitter(); 
  let balance = 1000;

  setTimeout(()=>{
    //Takes Five Seconds to Charge a Customer
    balance -= cost;
    if (balance > 0) {
      emitterTwo.emit('completion', "your new balance is... " + balance);
    } else {
      emitterTwo.emit('failure', "insufficient funds" + balance);
    }
  },5000);

  return emitterTwo;
}

//We retain control here and dont invert.
//We define our function on the event emitter instead of passing it into the function itself.
const returnedEmitter = chargeCustomer(42);
returnedEmitter.on('completion', (balance) => {
  console.log("we have completed with value", balance);
});

returnedEmitter.on('failure', (err) => {
  console.log("we have failed with err", err);
});




