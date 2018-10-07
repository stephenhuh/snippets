class human {
 speak(){
   console.log("speaking");
 }
 respeak(){
 	this.speak();
 }
 let lock = "123";
}

x = new human();
console.log(x.lock);
