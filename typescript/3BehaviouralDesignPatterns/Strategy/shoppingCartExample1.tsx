interface PaymentStrategy {
  pay(amount: number): void;
}

//concrete strategyies
class PayPalStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`PayPal payment ${amount} dolars`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`CreditCard payment ${amount} dolars`);
  }
}

class BitcointStrategy implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Bitcoin payment ${amount} dolars`);
  }
}

class ShoppingCart {
  private amount: number = 0;
  constructor(private strategy: PaymentStrategy) {
    this.strategy = strategy;
  }
  setPaymentStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }
  addToCart(value: number) {
    this.amount += value;
  }
  checkout() {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

//client code
const shoppingCard = new ShoppingCart(new CreditCardStrategy());
shoppingCard.addToCart(100);
shoppingCard.setPaymentStrategy(new PayPalStrategy());
shoppingCard.checkout();
shoppingCard.addToCart(32);
shoppingCard.setPaymentStrategy(new CreditCardStrategy());
shoppingCard.checkout();
shoppingCard.addToCart(67);
shoppingCard.setPaymentStrategy(new BitcointStrategy());
shoppingCard.checkout();

//--------------------------------------------------------------------------------------------//
//////////Whithout Strategy Pattern////////
type PaymentMethod2 = "paypal" | "creditcard" | "bitcoin";

class ShoppingCart2 {
  private amount: number = 0;
  private paymentMethod: PaymentMethod2;

  constructor(paymentMethod: PaymentMethod2) {
    this.paymentMethod = paymentMethod;
  }

  setPaymentMethod(method: PaymentMethod2) {
    this.paymentMethod = method;
  }

  addToCart(value: number) {
    this.amount += value;
  }

  checkout() {
    switch (this.paymentMethod) {
      case "paypal":
        console.log(`PayPal payment ${this.amount} dollars`);
        break;
      case "creditcard":
        console.log(`CreditCard payment ${this.amount} dollars`);
        break;
      case "bitcoin":
        console.log(`Bitcoin payment ${this.amount} dollars`);
        break;
      default:
        console.log("Unknown payment method.");
        break;
    }
    this.amount = 0;
  }
}

// Client code
const shoppingCart2 = new ShoppingCart2("creditcard");
shoppingCart2.addToCart(100);
shoppingCart2.setPaymentMethod("paypal");
shoppingCart2.checkout();

shoppingCart2.addToCart(32);
shoppingCart2.setPaymentMethod("creditcard");
shoppingCart2.checkout();

shoppingCart2.addToCart(67);
shoppingCart2.setPaymentMethod("bitcoin");
shoppingCart2.checkout();
