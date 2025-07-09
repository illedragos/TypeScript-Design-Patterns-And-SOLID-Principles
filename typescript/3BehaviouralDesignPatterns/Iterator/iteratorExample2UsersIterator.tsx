interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}

//any colection that wants to implement iterator need to implement this interface
//when we want to have a colection or we want an array to be converted into a colection (it has iterator pattern implemented)
interface ICollection<T> {
  createIterator(): MyIterator<T>;
}

class UserI {
  constructor(public name: string) {}
}

//we use here User but we can use any other objects, Pages etc
class UserCollection implements ICollection<UserI> {
  constructor(private users: UserI[]) {}
  createIterator(): MyIterator<UserI> {
    return new UserIterator(this);
  }
  getItems(): UserI[] {
    return this.users;
  }
}

class UserIterator implements MyIterator<UserI> {
  private position: number = 0;
  constructor(private collection: UserCollection) {}
  next(): MyIteratorResult<UserI> {
    if (this.hasNext()) {
      return {
        value: this.collection.getItems()[this.position++],
        done: false,
      };
    } else {
      return { value: null, done: true };
    }
  }
  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }
}

// Client Code
const users = [
  new UserI("Alice"),
  new UserI("Dragos"),
  new UserI("Bob"),
  new UserI("John"),
];

//Convert this array into an colection
const userCollection = new UserCollection(users);

// create an iterator for users
const iteratorUser = userCollection.createIterator();

console.log(iteratorUser.next().value?.name);
console.log(iteratorUser.next().value?.name);
console.log(iteratorUser.next().value?.name);
