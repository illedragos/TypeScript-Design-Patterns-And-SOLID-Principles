interface FilterStrategy {
  apply(image: string): void;
}

class GrayscaleStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`${image} is grayscale`);
  }
}

class SepiaStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`${image} is sepia`);
  }
}

class NegativeStrategy implements FilterStrategy {
  apply(image: string): void {
    console.log(`${image} is negative`);
  }
}

class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}
  setFilterStrategy(strategy: FilterStrategy) {
    this.strategy = strategy;
  }
  applyFilter(image: string) {
    this.strategy.apply(image);
  }
}

//client code
const imageProcesor = new ImageProcessor(new GrayscaleStrategy());
imageProcesor.applyFilter("House.jpg");
imageProcesor.setFilterStrategy(new SepiaStrategy());
imageProcesor.applyFilter("Tree.jpg");
imageProcesor.setFilterStrategy(new NegativeStrategy());
imageProcesor.applyFilter("Horse.jpg");
