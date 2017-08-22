const verifyPaymentInfo = require('./node_modules/stripe/verifyPaymentInfo.js').verifyPaymentInfo;

let sendThankYouEmail = function sendThankYouEmail(email) {
  console.log("Thank you email sent to:", email);
  return;
}

let emptyCart = function(){
  return;
}

let displayError = function(){
  retrun;
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
const checkout = function checkout (purchaseInfo){
  verifyPaymentInfo(purchaseInfo)
    .then((res)=> {
      chargeCreditCard(purchaseInfo); 
      sendThankYouEmail(purchaseInfo.email);
      emptyCart();
    })
    .catch((err) => {
      console.error(err);
    })
}


//TODO:Include purchaseInfo
const purchaseInfo = {
  username : 'stevie',
  email : 'stevie@projecttwine.com',
  item : 'Air Force 1s',
  price : 70
}

checkout(purchaseInfo);

