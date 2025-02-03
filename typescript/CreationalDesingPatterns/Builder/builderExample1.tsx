console.log("start-Index-2025");
interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product1 {
  private parts: string[] = [];

  public add(part: string) {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product Parts: ${this.parts.join(", ")}`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public setPartA(): void {
    this.product.add("PartA");
  }
  public setPartB(): void {
    this.product.add("PartB");
  }
  public setPartC(): void {
    this.product.add("PartC");
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimumProduct(): void {
    this.builder.setPartA();
  }

  public buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);
