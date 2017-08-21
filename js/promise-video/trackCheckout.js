const chargeCreditCardTwo = function(purchaseInfo) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let balance = 1000;
      balance -= purchaseInfo.price;
      if (balance > 0) {
        resolve(balance);
      } else {
        reject(new Error("Insufficient funds"));
      }
    },2000)
  });
}

const chargeCreditCard = function(purchaseInfo, callback) {
  let balance = 1000;
  balance -= purchaseInfo.price;
  if (balance > 0) {
    callback(null, balance);
  } else {
    callback(new Error("Insufficient funds"));
  }
}
