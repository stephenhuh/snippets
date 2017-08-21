//import trackCheckout

function sendThankYouEmail (err, email) { 
  if (err) {
    console.log(err);
    return err;
  }
  console.log("Thank you email sent to: ", email "!");
  return;
}


const purchaseInfo = {
  username : 'Stevie',
  price : 5,
  email : 'stephenhuh@gmail.com'
};

chargeCreditCard(purchaseInfo, function() {
  sendThankYouEmail(purchaseInfo.email);
});


chargeCreditCardTwo(purchaseInfo)
  .then((res) => {
    console.log("Transaction Success! Balance is:", res);
  })
  .catch((err) => {
    console.log("Transaction failed! Message is:", err);
  });
