interface UserDetails {
  name: string;
  age: number;
  emai: string
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {

  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user }
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user_nr_1 = new ConcretePrototype(
  {
    name: "Dragos",
    age: 34,
    emai: "dragos@me.com"
  }
)

let user_nr_2 = user_nr_1.clone()

if (user_nr_1 === user_nr_2) {
  console.log("Both instances are the same");
}
else {
  console.log("Cloned objects are separate instances");
}
