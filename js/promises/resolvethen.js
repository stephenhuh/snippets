new Promise(function(res, rej){ 
  res('og promise');
}).then((res) => {
  console.log("first then", res);
  return "res from first"
}).then((res) => {
  console.log("second then", res);
}).catch(() => {
  console.log("caught");
});

new Promise(function(res, rej){ 
  rej('og promise');
}).then((res) => {
  console.log("first then", res);
  return "res from first"
}).then((res) => {
  console.log("second then", res);
}).catch((err) => {
  console.log("caught", err);
});
