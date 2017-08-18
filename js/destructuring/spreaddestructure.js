//Destructuring and Spread
let [x,y,z] = [1,2,3]
console.log('x',x);
console.log('y',y);
console.log('z',z);


const [constx,consty] = [1,2,3];
console.log('constx',constx);
console.log('consty',consty);
// error : constx = 4;

const [constz,const1,const2,...rest] = [1,2,3,4,5,6,7,8,9];
console.log(rest);

//
let obj = {x : 1, y : 3};
//invalid
//{objx, objy} = obj;

let objspread = {p:42, q: true};
({p,q} = objspread) //matches against the keys, parens r requrired without declaration
console.log("p", p);
console.log("q", q);


let {defaultval = "default"} = {notmatched : "notmatched"};
console.log("defaultval", defaultval);


//swapping variables (notice its because its an array)
var a = "a";
var b = "b";
[a,b] = [b,a];
console.log("a",a);
console.log("b",b);









