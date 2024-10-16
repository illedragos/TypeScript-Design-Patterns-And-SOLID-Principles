// shapes
// calculate aria and perimeter
// simple - single function calculateTotalArea (this function should be able to calculate the aria of any shape provided )
// Simple example of abstraction


interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {

  constructor(private radius: number) {
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {

  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height)
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area()
}


let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);

console.log("Area of circle", calculateTotalArea(circle));
console.log("Area of rectangle", calculateTotalArea(rectangle));
