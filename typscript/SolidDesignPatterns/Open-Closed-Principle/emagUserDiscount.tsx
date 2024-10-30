
//regular - 10%
//premium - 20%

// type UserType = "Regular" | "Premium";

// class EmagUser {

//   constructor(public readonly name: string, public readonly type: UserType) { }

//   private static readonly DISCOUNTS = {
//     Regular: 10,
//     Premium: 20,
//   };

//   public getDiscount(): number {
//     return EmagUser.DISCOUNTS[this.type];
//   }
// }

// Define the UserType type
type UserType = "Regular" | "Premium";

// Configuration for discounts can be loaded from a JSON file or environment variables
const discountConfig = {
  Regular: 10,
  Premium: 20,
};

// DiscountService to handle discount logic
class DiscountService {
  private static readonly DISCOUNTS = discountConfig;

  public static getDiscount(userType: UserType): number {
    return this.DISCOUNTS[userType] || 0; // Default to 0 for unknown types
  }
}

// EmagUser class representing a user
class EmagUser {
  constructor(
    public readonly name: string,
    public readonly type: UserType,
    private discountService: typeof DiscountService // Injecting the DiscountService
  ) { }

  public getDiscount(): number {
    return this.discountService.getDiscount(this.type);
  }
}

// Usage example
const user1 = new EmagUser("Alice", "Regular", DiscountService);
console.log(`${user1.name} gets a discount of ${user1.getDiscount()}%`); // Alice gets a discount of 10%

const user2 = new EmagUser("Bob", "Premium", DiscountService);
console.log(`${user2.name} gets a discount of ${user2.getDiscount()}%`); // Bob gets a discount of 20%

