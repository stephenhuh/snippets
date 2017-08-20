function returnABrokenPromise(){
  return new Promise(function(resolve,reject) {
    resolve(4);
    reject(15);
  });
}


var x = returnABrokenPromise()
x.then(function(res){
  console.log(res);
}).catch(function(err){
  console.log(err);
});
