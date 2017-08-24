function isItThree (number) {
  return new Promise((function(resolve,reject){
    setTimeout(() => {
      number === 3 ? resolve("resolved") : reject("rejected");
    } ,2000) 
  }));
}

let x = isItThree(3)
.then((res)=>{
  return 4;
})
.then((res) =>{
  console.log("second number is...", res);
  return "four";
})
.then((res)=> {
  console.log("third in chain is...", res);
})

console.log("x is..", x);
x.then((res) => {
  console.log("ok..",res);
})

let y = isItThree(3)
  .then((res) => {
    console.log("y is..", res);
    return res + "ya";
  })

  y.then((res)=>{
    console.log("here???", res);
  })

