let getNum = function() {
  setTimeout(function(){
      return 3;
    },2000);
}

let getNumPromisified = function() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(3);
    },3333);
  });
}

async function test(x){
  var a = await getNum(1);
  var b = await getNum(3);
  return x + a + b;
}

async function testPromisified(x){
  var a = await getNumPromisified(1);
  var b = await getNumPromisified(3);
  return x + a + b;
}

console.log(test(5));
test(5)
  .then((res)=> {
      console.log(res);
    })
  .catch((err)=> {
      console.error(err);
  })

test(10).then((x) => {
  console.log("okay...",x);
})

testPromisified(3)
  .then((res)=> {
    console.log(res); 
  });


