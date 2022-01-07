//Openb CLose Principle

class Shape {
  area() {
    throw new Error("Sry, but shape not found");
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size;
  }
  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}
class Rect extends Shape {
  constructor(width, height) {
    super()
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height
  }
}

class AreaCalc {
  constructor(shapes = []) {
    this.shapes = shapes;
  }
  calcSum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalc([new Square(10), new Circle(1), new Circle(5)]);
console.log(calc.calcSum());
