function Foof() {

}

//Functionally the same
class Foo {


}

class Animal {
  constructor (name) {
    this.name = name; 
  }

}

function Animalf(name) {
  this.name = name;
}

const monsterHealth = Symbol();
class Monster {
  constructor (name, health) {
    this.name = name; 
    this[monsterHealth] = health;
  }

}


var a = new Monster('Kevin', 1);
console.log(a); //random property with 1 inside.

