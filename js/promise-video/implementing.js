const chargeCreditCard = require('./trackCheckout.js').chargeCreditCard;
const chargeCreditCardTwo = require('./trackCheckout.js').chargeCreditCardTwo;
const chargeCreditCardBroken = require('./trackCheckout.js').chargeCreditCardBroken;
const chargeCreditCardTwoBroken = require('./trackCheckout.js').chargeCreditCardTwoBroken;

function sendThankYouEmail (err, email) { 
  if (err) {
    console.log(err);
    return err;
  }
  console.log("Thank you email sent to: ", email );
  return;
}


const purchaseInfo = {
  username : 'Stevie',
  price : 5,
  email : 'stephenhuh@gmail.com'
};

/*
chargeCreditCardBroken(purchaseInfo, function(err, balance) {
  if (err) {
    console.error(err);
    return err;
  }
  console.log("Transaction success! Balance is: ", balance);
  sendThankYouEmail(null, purchaseInfo.email);
});
*/


//Promises are contracts! 

/*
chargeCreditCardTwo(purchaseInfo)
  .then((res) => {
    console.log("Transaction Success! Balance is:", res);
  })
  .catch((err) => {
    console.log("Transaction failed! Message is:", err);
  });
*/

chargeCreditCardTwoBroken(purchaseInfo)
  .then((res) => {
    console.log("Transaction Success! Balance is:", res);
    sendThankYouEmail(null, purchaseInfo.email);
  })
  .catch((err) => {
    console.log("Transaction failed! Message is:", err);
  });
