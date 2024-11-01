console.log("aaa");

// regular - 10
// premium - 20
// gold - 30 if you add new feature and need to modify the curent code you are vilating the open close principle

// class Discount {
//   giveDiscount(customerType: "premium" | "regular"): number {
//     if (customerType === "regular") {
//       return 10;
//     } else if (customerType === "premium") {
//       return 20;
//     } else {
//       return 10;
//     }
//   }
// }


//add loyality functionality

interface ICustomer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements ICustomer {
  giveDiscount(): number {
    return 10;
  }
  addLoyaltyPoints(amountSpent: number) {
    return amountSpent;
  }
}

class PremiumCustomer implements ICustomer {
  giveDiscount(): number {
    return 20;
  }
  addLoyaltyPoints(amountSpent: number) {
    return amountSpent * 2;
  }

}

class GoldCustomr implements ICustomer {
  giveDiscount(): number {
    return 30;
  }
  addLoyaltyPoints(amountSpent: number) {
    return amountSpent * 3;
  }

}

class Discount {
  giveDiscount(customer: ICustomer): number {
    return customer.giveDiscount();
  }
}

let premiumCustomer = new PremiumCustomer();
let discount = new Discount();


discount.giveDiscount(premiumCustomer);
