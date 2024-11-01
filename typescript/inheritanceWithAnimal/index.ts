class Animal {

  constructor(public name: string) {

  }

  public move(distance: number): void {
    console.log(`${this.name} has moved ${distance} meters.`)
  }

}

class Dog extends Animal {

}

const Nero = new Dog("Nero");
Nero.move(100);
