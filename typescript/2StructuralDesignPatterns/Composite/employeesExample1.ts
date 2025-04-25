interface IEmployee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

//Component
class Developer implements IEmployee {
  constructor(private name: string, private salary: number) {}
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Developer";
  }
}

class Designer implements IEmployee {
  constructor(private name: string, private salary: number) {}
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Designer";
  }
}

//Composite
interface ICompositeEmployee extends IEmployee {
  addEmployee(employee: IEmployee): void;
  removeEmployee(employee: IEmployee): void;
  getEmployees(): IEmployee[];
}

class Manager implements ICompositeEmployee {
  private employees: IEmployee[] = [];
  constructor(private name: string, private salary: number) {}
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getRole(): string {
    return "Manager";
  }

  public addEmployee(employee: IEmployee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employee: IEmployee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public getEmployees(): IEmployee[] {
    return this.employees;
  }
}

//ClientCode
let dev1 = new Developer("John Doe", 1000);
let dev2 = new Developer("Jane", 1200);
let dev3 = new Developer("Dan", 1200);
let designer1 = new Designer("Mark", 900);

let manager = new Manager("Michael", 2500);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(dev3);
manager.addEmployee(designer1);

console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());
manager.removeEmployee(dev3);
console.log(manager);
// @question int't this version cleaner?
// abstract class BaseEmployee implements IEmployee {
//   constructor(protected name: string, protected salary: number) {}

//   public getName(): string {
//     return this.name;
//   }

//   public getSalary(): number {
//     return this.salary;
//   }

//   abstract getRole(): string;
// }

// class DeveloperRefactor extends BaseEmployee {
//   getRole(): string {
//     return "Developer";
//   }
// }

// class DesignerRefactor extends BaseEmployee {
//   getRole(): string {
//     return "Designer";
//   }
// }

// class ManagerRector extends BaseEmployee implements ICompositeEmployee {
//   private employees: IEmployee[] = [];

//   getRole(): string {
//     return "Manager";
//   }

//   addEmployee(employee: IEmployee): void {
//     this.employees.push(employee);
//   }

//   removeEmployee(employee: IEmployee): void {
//     const index = this.employees.indexOf(employee);
//     if (index !== -1) {
//       this.employees.splice(index, 1);
//     }
//   }

//   getEmployees(): IEmployee[] {
//     return this.employees;
//   }
// }
