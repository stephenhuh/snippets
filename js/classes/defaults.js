//default paramers

function test(a) {
  a = a || getSomeDefaultValue();
}

function test(a) {
  a = a ? a : getSomeDefaultValue();
}


function sayHello(name="World"){
  console.log("Hello " + name + "!");
}

sayHello("Dt Dew");
sayHello("");
//Its undefined that triggers not falsey values
sayHello(); //Triggers default
sayHello(undefined); //Triggers default


//can pass in a function

function getRand() {
  return Math.ceil(Math.random() * 100000) + new Date().getTime();
}

function myFunction(id=getRand()){
  console.log("My ID: " + id);
}


myFunction(3);
myFunction(undefined);
