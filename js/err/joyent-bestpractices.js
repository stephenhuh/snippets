//Synchronous code - just returning error types
var divideSync = function(x,y) {
  if (y === 0) {
    return new Error("Can't divide by zero");
  } else {
    return x/ y ;
  }
}


var result = divideSync(4,2)
if (result instanceof Error) {
  console.log('4/2=err', result)
}
else {
  console.log('4/2='+ result);
}

result = divideSync(4,0);

if (result instanceof Error) {
  console.log('4/0=err', result)
}
else {
  console.log('4/0='+result);
}



//Async - callback code (err-first pattern)
var divide = function(x,y,next){
  if (y === 0) {
    // "throw" the error safely by calling the completino callback
    // with err-first arg
    next (new Error("Can't divideb by zero")) ;
  }
  else {
    //no error occurred, continue on
    next(null, x/y);
  }
}

divide (4,2, function(err,result) {
  if (err) {
    console.log('4/2=err',err) ;
  } 
  else {
    //no error occureed, continue on 
    console.log('4/2='+result);
  }
})

divide (4,0, function(err,result) {
  //did an error occur?
  if (err){
    console.log('4/0=err', err) 
  } else {
    //no error occurred 
    console.log('4/0='+result)
  }
})


//eventful code
var events = require('events');
var Divider = function(){
  events.EventEmitter.call(this)
}

require('util').inherits(Divder, events.EventEmitter)

//add the divide function
Divide.prototype.divide = function(x,y){
  if (y ===0){
    var err = new Error('Cant divide by zero");') 
    this.emit(''error', err);
  } else {
    //no error occurred, keep going 
    this.emit('divided', x, y, x/y)
  }
  //chaining
  return this;
}


var divider = new Divider()
divider.on('error', function(err){
  //handle error safely
  console.log(err);
})


divider.on('divided', function(x,y,result){
  console.log(x+'/'+y+'='+result)
})

divider.divide(4,2).divide(4,0)



