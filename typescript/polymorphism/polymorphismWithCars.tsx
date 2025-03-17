// Define an interface for Car1
interface Car1 {
  model: string;
  productionYear: number;
  fuelType: string;

  displayCarInfo(): void;
  startEngine(): void;
  stopEngine(): void;
}

// Implement the interface in different car types
class Sedan1 implements Car1 {
  constructor(
    public model: string,
    public productionYear: number,
    public fuelType: string
  ) {}

  displayCarInfo(): void {
    console.log(
      `🚗 Sedan1: ${this.model} (${this.productionYear}), Fuel: ${this.fuelType}`
    );
  }

  startEngine(): void {
    console.log(`🔑 Starting the engine of ${this.model}...`);
  }

  stopEngine(): void {
    console.log(`🛑 Stopping the engine of ${this.model}...`);
  }
}

class SUV1 implements Car1 {
  constructor(
    public model: string,
    public productionYear: number,
    public fuelType: string
  ) {}

  displayCarInfo(): void {
    console.log(
      `🚙 SUV1: ${this.model} (${this.productionYear}), Fuel: ${this.fuelType}`
    );
  }

  startEngine(): void {
    console.log(`🔥 ${this.model} is roaring to life!`);
  }

  stopEngine(): void {
    console.log(`💨 ${this.model} engine shut down.`);
  }
}

class Hatchback1 implements Car1 {
  constructor(
    public model: string,
    public productionYear: number,
    public fuelType: string
  ) {}

  displayCarInfo(): void {
    console.log(
      `🚘 Hatchback1: ${this.model} (${this.productionYear}), Fuel: ${this.fuelType}`
    );
  }

  startEngine(): void {
    console.log(`⚡ ${this.model} is ready to go!`);
  }

  stopEngine(): void {
    console.log(`🛑 ${this.model} engine turned off.`);
  }
}

// Demonstrating Polymorphism
const cars: Car1[] = [
  new Sedan1("Toyota Camry", 2023, "Petrol"),
  new SUV1("Ford Explorer", 2022, "Diesel"),
  new Hatchback1("Honda Fit", 2024, "Electric"),
];

for (const car of cars) {
  car.displayCarInfo();
  car.startEngine();
  car.stopEngine();
  console.log("------------");
}
