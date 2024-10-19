//BankAccount
//Depositing
//Withdrawing
//Balance

class BankAccount {

  private _balance: number;

  constructor(initialbalance: number, private name: string) {
    this.name = name;
    this._balance = initialbalance
  }

  public get balance(): number {
    return this._balance;
  }

  setBalance(value: number): void {
    this._balance = value;
  }

  public deposit(depositValue: number): void {
    if (depositValue <= 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this.setBalance(this._balance + depositValue);
  }

  public withdraw(value: number) {
    if (value < 0) {
      console.log("invalid withdraw amount");
      return;
    }
    if (value > this._balance) {
      console.log("Insuficient funds");
      return;
    }
    this.setBalance(this._balance - value);
  }
}

const dragosBankAcoount = new BankAccount(0, "Dragos");

console.log("dragos balance initial", dragosBankAcoount.balance)
console.log("deposit 1000");
dragosBankAcoount.deposit(1000);
console.log("dragos balance", dragosBankAcoount.balance)
console.log("withdraw 10");
dragosBankAcoount.withdraw(10);
console.log("dragos balance", dragosBankAcoount.balance)
