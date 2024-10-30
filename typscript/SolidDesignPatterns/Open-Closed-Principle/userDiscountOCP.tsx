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

interface ICustomer {
  giveDiscount(): number;
}

class RegularCustomer implements ICustomer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements ICustomer {
  giveDiscount(): number {
    return 20;
  }
}

class GoldCustomr implements ICustomer {
  giveDiscount(): number {
    return 30;
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
