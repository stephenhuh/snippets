class A {
  constructor() {
    this.firstName = 'stevie'
  }

  speak () {
    console.log('hello', this.firstName)
  }
}

function decorate(obj) {
  const names = Object.getOwnPropertyNames(obj.prototype);
  console.log('names', names)
  const descriptor = Object.getOwnPropertyDescriptor(obj.prototype, 'speak');
  console.log('descriptor', descriptor.value)
  Object.defineProperty(obj.prototype, 'speak', {
    value : function() {
      descriptor.value.bind(obj)()
      console.log('world');
    }
  })
  return obj;
}


function decorated(target, key, descriptor) {
  const fn = descriptor.value;
  descriptor.value = function() {
    console.log('yo')
    fn();
  }
}

const a = new A();
console.log(a.speak());

const B = decorate(A);
const b = new B();
console.log(b.speak());
// retain this scope when decorating


