interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }

  public combinedOperation(collaborator: IProductA): string {
    const resultOperationA = collaborator.operationA();
    return `The result of Product B Collaborating with ${resultOperationA}`;
  }
}

class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }
  createProductB(): IProductB {
    return new ProductB();
  }
}

const factory = new Factory();
const producA = factory.createProductA();
console.log(producA.operationA());
const producB = factory.createProductB();
console.log(producB.combinedOperation(producA));
console.log(producB.operationB());
