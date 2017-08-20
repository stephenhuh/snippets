let isItThree = function(number) {
  return new Promise(function(resolve, reject) {
    if (number === 3) {
      resolve("yes");
    } else {
      callAFunctionThatDoesNotExist();
      reject("no");
    }
  });
}


//This is how you bring back try catch
isItThree(4)
  .then(function(res){
    console.log("then", res);
  })
  .catch(function(err){
    console.log("catch an error that may or may not be an operational one!", err);
  });
