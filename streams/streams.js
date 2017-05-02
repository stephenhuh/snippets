var fs = require ('fs');

//This will read in raw data 
console.log("reading in raw data with no encoding");
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("reading in raw data with utf-8 encoding");
fs.readFile('/etc/passwd','utf-8',  (err,data) => {
  if (err) throw err;
  console.log(data);
});
