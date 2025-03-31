abstract class PaymentProcessor1 {
  constructor(public amout: number) {}
  abstract processPayment(): void;
}

class PaypalProcessor1 extends PaymentProcessor1 {
  processPayment(): void {
    console.log(`Processing payment with Paypal: ${this.amout}`);
  }
}

class StripeProcessor1 extends PaymentProcessor1 {
  processPayment(): void {
    console.log(`Processing payment with Stripe: ${this.amout}`);
  }
}

class BankTransferProcessor1 extends PaymentProcessor1 {
  processPayment(): void {
    console.log(`Processing payment with Bank Transfer: ${this.amout}`);
  }
}

//easy add a new payment processor by adding it to switch statement of factory

class PaymentProcessorFactory1 {
  public createPaymentProcessor(
    type: "paypal" | "stripe" | "bankTransfer",
    amout: number
  ): PaymentProcessor1 {
    switch (type) {
      case "paypal":
        return new PaypalProcessor1(amout);
      case "stripe":
        return new StripeProcessor1(amout);
      case "bankTransfer":
        return new BankTransferProcessor1(amout);
      default:
        throw new Error("Invalid payment processor type");
    }
  }
}

//@question why not use static method in factory?
//const paypal = PaymentProcessorFactory1.createPaymentProcessor("paypal", 100);

const factory1 = new PaymentProcessorFactory1();

const paypal1 = factory1.createPaymentProcessor("paypal", 100);
paypal1.processPayment();
const stripe1 = factory1.createPaymentProcessor("stripe", 200);
stripe1.processPayment();
const bankTransfer1 = factory1.createPaymentProcessor("bankTransfer", 300);
bankTransfer1.processPayment();
