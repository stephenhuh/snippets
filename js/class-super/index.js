class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
    console.log('constructor on', this.name, 'called');
  }
}

const Shape = new Polygon(30, 40);
console.log(Shape);

class Square extends Polygon {
  constructor(length) {
    super(length, length); //required to use `this`
    this.name = 'Square';
  }
}

const square = new Square(90);
console.log(square);
console.log('this width on square is...', square.width);
