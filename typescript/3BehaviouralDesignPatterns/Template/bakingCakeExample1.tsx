console.log("start-Index-2025");

abstract class CakeRecipe {
  public bakeCake(): void {
    this.preheatOven();
    this.mixIncredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }
  protected preheatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }
  protected bake(): void {
    console.log("baking cake");
  }
  protected coolingDown(): void {
    console.log("colling down the cake");
  }
  protected decorate(): void {
    console.log("No decoration");
  }
  protected abstract mixIncredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIncredients(): void {
    console.log("Mixing: chocolate sugur butter, flour, eggs");
  }
  protected decorate(): void {
    console.log("Decoreting cake with chocolate");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIncredients(): void {
    console.log("Mixing: vanilla extract, sugur butter, flour, eggs");
  }
}

//client code
function bakeCake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocoloate cake");
bakeCake(new ChocolateCake());
console.log("\n-------------------");
console.log("Baking a vanilla cake");
bakeCake(new VanillaCake());
