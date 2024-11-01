abstract class Shape1 {
  abstract calculateArea(): number;
}

class Rectangle1 extends Shape1 {

  constructor(public width: number, public height: number) {
    super();
  }
  public calculateArea(): number {
    return this.width * this.height
  }

}

class Square1 extends Shape1 {

  constructor(public side: number) {
    super();
  }
  public calculateArea(): number {
    return this.side * this.side
  }

}

// ======= CLient Code

function area(shape: Shape1) {
  return shape.calculateArea()
}

let rectangleobj = new Rectangle1(10, 12);
let squreobj = new Square1(8)

area(rectangleobj);
area(squreobj)
