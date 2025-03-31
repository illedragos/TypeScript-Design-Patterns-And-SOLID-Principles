class Grinder {
  public grindBeans(): void {
    console.log("grinding beans...");
  }
}

class Boilder {
  public boilWater(): void {
    console.log("boiling water...");
  }
}

class Brewer {
  public brewCoffe(): void {
    console.log("brewing Coffee ...");
  }
}

class CoffeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boilder,
    private brewer: Brewer
  ) {}
  public makeCoffer() {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffe();
    console.log("The Coffe is ready");
  }
}

let grinder = new Grinder();
let boiler = new Boilder();
let brewer = new Brewer();

let coffeMaker = new CoffeMakerFacade(grinder, boiler, brewer);
