//Payment Processor
//Credit Card
//Debit Card
//PayPall

abstract class PaymentProcessor {
  abstract pay(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  pay(amount: number): void {
    console.log("payed with credit card" + amount)
  }
}
class DebitCard extends PaymentProcessor {
  pay(amount: number): void {
    console.log("payed with debit card" + amount)
  }
}
class PayPall extends PaymentProcessor {
  pay(amount: number): void {
    console.log("payed with paypal" + amount)
  }
}


class ExecutePayment {
  public pay(payOBJ: PaymentProcessor, amount: number): void {
    payOBJ.pay(amount);
  }
}

const creditCardPayment = new CreditCard();
const debitCardPayment = new DebitCard();
const paypallPayment = new PayPall();

const executePayment = new ExecutePayment();

executePayment.pay(creditCardPayment, 10)
executePayment.pay(debitCardPayment, 40)
executePayment.pay(paypallPayment, 15)
