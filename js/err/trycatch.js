function divide (dividend, divisor) {
  if (divisor === 0) {
    throw "divide by 0 error";
  } else {
    return dividend / divisor; 
  }
}


try {
  //if any statement within this block or a function
  //called from within this block throws an exception
  //, we catch it.
  divide(5,0);
} catch (e) {
  console.log("caught an error", e);
}
