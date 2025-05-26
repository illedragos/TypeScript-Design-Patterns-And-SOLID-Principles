class RectangleA {
  constructor(private width: number, private height: number) {}
  public getWidth(): number {
    return this.width;
  }
  public getHeight(): number {
    return this.height;
  }
  public area(): number {
    return this.width * this.height;
  }
}

class SquareA {
  constructor(private side: number) {}
  public getSide(): number {
    return this.side;
  }
  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(private square: SquareA) {}
  public getWidth(): number {
    return this.square.getSide();
  }
  public getHeight(): number {
    return this.square.getSide();
  }
  public area(): number {
    return this.square.area();
  }
}

//client code
let square = new SquareA(5);
let adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);
//@question isn't it better to enforce the type of rectangle with an interface?

//@question what is a mixin? is it used?
// Reusable behavior classes (mixins)
// class CanEat {
//   eat() {
//     console.log("Eating...");
//   }
// }

// class CanSleep {
//   sleep() {
//     console.log("Sleeping...");
//   }
// }

// // Base class
// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// // Extend the base class with mixin interfaces
// interface Animal extends CanEat, CanSleep {}

// // Apply mixins to the base class prototype
// applyMixins(Animal, [CanEat, CanSleep]);

// // Mixin application helper function
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//       Object.defineProperty(
//         derivedCtor.prototype,
//         name,
//         Object.getOwnPropertyDescriptor(baseCtor.prototype, name)!
//       );
//     });
//   });
// }

// // Test
// const dog = new Animal("Rex");
// dog.speak();  // Rex makes a sound.
// (dog as any).eat();   // Eating...
// (dog as any).sleep(); // Sleeping...
