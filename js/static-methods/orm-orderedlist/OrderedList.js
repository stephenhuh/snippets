function OrderedList() {
  this.data = [];
}

OrderedList.prototype.push = function(el) {
  return this.data.push(el)
}

class Model {
  staticOrderedList = new OrderedList();
  constructor() {
    this.orderedList = new OrderedList();
  }
}

function ModelES5 {
  this.orderedList = new OrderedList();
}

const main = () => {
  Model.staticOrderedList.push(4);
}

main();
console.log(Model.staticOrderedList);
