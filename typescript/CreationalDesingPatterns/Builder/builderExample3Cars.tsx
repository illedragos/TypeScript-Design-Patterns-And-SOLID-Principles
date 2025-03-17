abstract class Car3 {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan3 extends Car3 {
  displayCarInfo(): void {
    console.log(`This is Sedan: ${this.model} (${this.productionYear})`);
  }
}

class SUV3 extends Car3 {
  displayCarInfo(): void {
    console.log(`This is SUV: ${this.model} (${this.productionYear})`);
  }
}

class Hatchback3 extends Car3 {
  displayCarInfo(): void {
    console.log(`This is Hatchback: ${this.model} (${this.productionYear})`);
  }
}

// 🚀 Builder Class
class Car3Builder {
  private model!: string;
  private productionYear!: number;
  private type!: "sedan" | "suv" | "hatchback";

  setModel(model: string): this {
    this.model = model;
    return this;
  }

  setProductionYear(year: number): this {
    this.productionYear = year;
    return this;
  }

  setType(type: "sedan" | "suv" | "hatchback"): this {
    this.type = type;
    return this;
  }

  build(): Car3 {
    if (!this.model || !this.productionYear || !this.type) {
      throw new Error("Missing required properties");
    }

    switch (this.type) {
      case "sedan":
        return new Sedan3(this.model, this.productionYear);
      case "suv":
        return new SUV3(this.model, this.productionYear);
      case "hatchback":
        return new Hatchback3(this.model, this.productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const sedan3 = new Car3Builder()
  .setType("sedan")
  .setModel("BMW")
  .setProductionYear(2021)
  .build();
sedan3.displayCarInfo();

const suv3 = new Car3Builder()
  .setType("suv")
  .setModel("Audi")
  .setProductionYear(2022)
  .build();
suv3.displayCarInfo();

const hatchback3 = new Car3Builder()
  .setType("hatchback")
  .setModel("Toyota")
  .setProductionYear(2023)
  .build();
hatchback3.displayCarInfo();
