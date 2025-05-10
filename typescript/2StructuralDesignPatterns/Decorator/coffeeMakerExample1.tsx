interface ICoffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements ICoffee {
  cost(): number {
    return 10;
  }
  description(): string {
    return "Simple Coffee";
  }
}

abstract class CoffeeDecorator implements ICoffee {
  constructor(protected coffee: ICoffee) {}
  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: ICoffee) {
    super(coffee);
  }
  cost(): number {
    return this.coffee.cost() + 2;
  }
  description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}

//client code
let coffee: ICoffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);
