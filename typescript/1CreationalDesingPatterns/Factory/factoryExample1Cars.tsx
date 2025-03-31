abstract class Car {
  constructor(public model: string, public productionYear: number) {}
  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(`This is Sedan: ${this.model} (${this.productionYear})`);
  }
}

class SUV extends Car {
  displayCarInfo(): void {
    console.log(`This is SUV: ${this.model} (${this.productionYear})`);
  }
}

class Hatchback extends Car {
  displayCarInfo(): void {
    console.log(`This is Hatchback: ${this.model} (${this.productionYear})`);
  }
}

class CarFactory {
  public createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
const sedan = carFactory.createCar("sedan", "BMW", 2021);
sedan.displayCarInfo();
const suv = carFactory.createCar("suv", "Audi", 2021);
suv.displayCarInfo;
const hatchback = carFactory.createCar("hatchback", "Toyota", 2021);
hatchback.displayCarInfo();

//@question why not use this instead of factory?
const sedanNew = new Sedan("BMW", 2022);
const suvNew = new SUV("Audi", 2022);
const hatchbackNew = new Hatchback("Toyota", 2022);
