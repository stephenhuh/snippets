const verifyPaymentInfo = require('./node_modules/stripe/verifyPaymentInfo.js').verifyPaymentInfo;

let sendThankYouEmail = function sendThankYouEmail(email) {
  console.log("Thank you email sent to:", email);
  return;
}

let emptyCart = function(){
  return;
}

let displayError = function(){
  return;
}


let balance = 1000;

const chargeCreditCard = function(purchaseInfo) {
    balance -= purchaseInfo.price;
    if (balance > 0) {
      console.log("Successful purchase of: " + purchaseInfo.item );
      console.log("Your new balance is: " +  balance)
    } else {
      console.error("Insufficient balance");
    }
}

/*
const checkout = function(purchaseInfo){
  verifyPaymentInfo(purchaseInfo, function finishPurchase(err, res){
    if (err) {
      jj  
    }
    chargeCreditCard(purchaseInfo);
    sendThankYouEmail(purchaseInfo.email);
    emptyCart();
  });
}
*/

const checkout = function(purchaseInfo) {
  verifyPaymentInfo(purchaseInfo)
    .then((res)=>{
      chargeCreditCard(purchaseInfo);
      sendThankYouEmail(purchaseInfo.email);
      emptyCart();
    })
    .catch((err) =>{
      console.error(err); 
    })
}

const purchaseInfo = {
  username : 'stevie',
  email : 'stevie@projecttwine.com',
  item : 'Air Force 1s',
  price : 70
};



checkout(purchaseInfo);

