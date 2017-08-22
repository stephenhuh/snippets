//async await is just promises and generators combined
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
      setTimeout(() => {
            resolve(x);
          }, 2000);
    });
}

async function add1(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

function add1noWait(x){
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + a + b;
}

console.log(add1noWait(3));
console.log(add1(3));

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});



