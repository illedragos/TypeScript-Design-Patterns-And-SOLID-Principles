console.log("start-Index-2025");

interface ShapeAbstractProperties {
  color: string;
  x: number;
  y: number;
}

abstract class ShapeAbstract {
  constructor(public properties: ShapeAbstractProperties) {}
  abstract clone(): ShapeAbstract;
}

class Rectangle2 extends ShapeAbstract {
  constructor(
    public properties: ShapeAbstractProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  public clone(): ShapeAbstract {
    let clonedProperties: ShapeAbstractProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle2(clonedProperties, this.width, this.height);
  }
}

class Circle2 extends ShapeAbstract {
  public constructor(
    public properties: ShapeAbstractProperties,
    public radius: number
  ) {
    super(properties);
  }

  clone(): ShapeAbstract {
    let clonedProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle2(clonedProperties, this.radius);
  }
}

let redRectangle: ShapeAbstract = new Rectangle2(
  {
    color: "red",
    x: 1,
    y: 2,
  },
  10,
  20
);

let anotherRectangle = redRectangle.clone();
anotherRectangle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRectangle);
