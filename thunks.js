//Sync Thunk
function add(x,y){
  return x + y;
}

var syncThunk = function(){
  return add(10,15);
}

syncThunk(); // 25 -- container of state at which syncThunk was made.



//Async Thunk
function addAsync(x,y,cb){
    setTimeout(function(){
        cb(x+y);
    },1000)
}

var thunk = function(cb){
    addAsync(10,15,cb);
}

thunk(function(sum){
    console.log(sum);
});

