const assert = require('assert');

class Parent {
  constructor() {
    this.place = 'Italia';
  }

  static sayHello() {
    //assert(this.place, 'this place doesnt exist on static');
    console.log(`Hello ${this.place}`);
  }

  instanceSayHello() {
    console.log(`Hello ${this.place} from instance method`);
  }
}


const main = () => {
  Parent.sayHello();
  // Parent.instanceSayHello();
  const riccardo = new Parent();
  // riccardo.sayHello();
  riccardo.instanceSayHello();
}


// same as
function ParentES5 () {
  // note everything here is basically the `constructor` call
  this.place = 'Italia';
}

ParentES5.prototype.instanceSayHello = function() {
  console.log(`Hello ${this.place} from ES5 instance method`);
}

ParentES5.staticHello = function () {
  this.place = 'Alaska';
  console.log(`hello ${this.place} from ES5 static`);
}

const mainES5 = () => {
  const giuseppe = new ParentES5()
  giuseppe.instanceSayHello();

  this.place = 'Mexico';
  ParentES5.staticHello();
}


main();
mainES5();
