const chargeCreditCard = function(purchaseInfo, callback) {
  setTimeout(function() {
    let balance = 1000;
    balance -= purchaseInfo.price;
    if (balance > 0) {
      callback(null, balance);
    } else {
      callback(new Error("Insufficient funds"));
    }
  }, 2000)
}

const chargeCreditCardBroken = function(purchaseInfo, callback) {
  setTimeout(function() {
    let balance = 1000;
    balance -= purchaseInfo.price;
    if (balance > 0) {
      callback(null, balance);
      callback(null, balance);
      callback(null, balance);
    } else {
      callback(new Error("Insufficient funds"));
    }
  }, 2000)
}

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

const chargeCreditCardTwoBroken = function(purchaseInfo) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let balance = 1000;
      balance -= purchaseInfo.price;
      if (balance > 0) {
        resolve(balance);
        resolve(balance);
        resolve(balance);
        resolve(balance);
      } else {
        reject(new Error("Insufficient funds"));
      }
    },2000)
  });
}

module.exports = {
  chargeCreditCard : chargeCreditCard,
  chargeCreditCardTwo : chargeCreditCardTwo,
  chargeCreditCardBroken : chargeCreditCardBroken,
  chargeCreditCardTwoBroken : chargeCreditCardTwoBroken
}
