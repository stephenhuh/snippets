//Create Promise

function chargeAccount (price, callback){
  var balance = 1000;
  return new Promise(function(resolve,reject){
    if (balance > price) {
      balance -= price;
      resolve(balance);
    } else {
      reject("not enough money");
    }
  });
}
