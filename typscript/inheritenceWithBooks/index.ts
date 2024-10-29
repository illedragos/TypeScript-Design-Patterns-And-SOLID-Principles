import { UUID } from "sequelize";

console.log("aaa");


class Product {
  constructor(public id: string, public price: number, public description: string) {

  }
  public display(): void {
    console.log("Id:" + this.id + " Price:" + this.price + " Description:" + this.description);
  }
}

class Book extends Product {
  constructor(public id: string, public price: number, public description: string, public author: string, public title: string) {
    super(id, price, description);
  }

  public display(): void {
    super.display()
    console.log(" Author:" + this.author + " Title:" + this.title);
    console.log("-------------------------------------------------------")
  }

}

class Electronic extends Product {

  constructor(public id: string, public price: number, public description: string, public brand: string, public model: string) {
    super(id, price, description);
  }

  public display(): void {
    super.display()
    console.log(" Brand:" + this.brand + " Model:" + this.model);
    console.log("-------------------------------------------------------")
  }
}

const Book1 = new Book("13ewueq3113", 3, "The idiot is a nice book", "Dostoiveski", "THe Idiot");
const Computer = new Electronic("13ewueq3113", 3, "powerfull laptop", "Apple", "Macbook");

Book1.display();
Computer.display()
