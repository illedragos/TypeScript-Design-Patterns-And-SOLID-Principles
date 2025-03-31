interface ICustomerBuilder1 {
  setFirstName(firstName: string): ICustomerBuilder1;
  setLastName(lastName: string): ICustomerBuilder1;
  setEmail(email: string): ICustomerBuilder1;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder1;
  build(): ICustomer1;
}

interface ICustomer1 {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

class Customer1 implements ICustomer1 {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

class CustomerBuilder1 implements ICustomerBuilder1 {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";
  setFirstName(firstName: string): CustomerBuilder1 {
    this.firstName = firstName;
    return this;
  }
  setLastName(lastName: string): CustomerBuilder1 {
    this.lastName = lastName;
    return this;
  }
  setEmail(email: string): CustomerBuilder1 {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): CustomerBuilder1 {
    this.phoneNumber = phoneNumber;
    return this;
  }
  build(): ICustomer1 {
    return new Customer1(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    );
  }
}

class CustomerDirector1 {
  constructor(private builder: ICustomerBuilder1) {}
  buildMinimum(firstName: string, lastName: string, email: string): ICustomer1 {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const builder1: ICustomerBuilder1 = new CustomerBuilder1();
const director1: CustomerDirector1 = new CustomerDirector1(builder1);
const cutomBuilder1: CustomerBuilder1 = new CustomerBuilder1();

const customer1: ICustomer1 = director1.buildMinimum(
  "John",
  "Doe",
  "john.doe@example.com"
);

console.log("cusotomer1", customer1);

const customer2: ICustomer1 = builder1
  .setFirstName("Alice")
  // .setLastName("Smith")
  .setEmail("alice@me.com")
  .setPhoneNumber("1234567890")
  .build();

console.log("customer2", customer2);

const customer3: ICustomer1 = cutomBuilder1.build(); //@question can we enforce that no empty user will be created?
console.log("customer3", customer3);
// @question
// do we use builder for all cutomers? or builder for each customer?
// name for second customer is already set
// contruct customr 1 or 2? in the second case you can stiil construnt the customer with minimum data
