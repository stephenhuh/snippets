function fakeFetch(num) {
  return new Promise(function(resolve,reject) {
    num === 3 ? resolve("ya") : reject("nah");
  }).then((res) => {
    return " finished" 
  })
}


function isItFive (number) {
  return new Promise((function(resolve,reject){
    setTimeout(() => {
      let arr = new Array(number, 1000);
      arr.forEach((el, idx, arr, a, b) => {
        console.log(el,idx,arr,a,b);
      })
      number === 5 ? resolve("resolved") : reject("rejected");
    } ,2000) 
  }));
}


isItFive(5)
  .then((res) => {
    console.log("yes its five", res);
    return fakeFetch(3);
  })
  .then((res) => {
    console.log("its also three and should be", res);
  })
  .catch((err)=>{
    console.error(err); 
  })
  

