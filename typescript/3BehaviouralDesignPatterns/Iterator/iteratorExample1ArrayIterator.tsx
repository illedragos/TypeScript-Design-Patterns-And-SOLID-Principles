class ArrayIterator1<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}
  public next(): T {
    //always getting the next element
    const result: T = this.collection[this.position];
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

//client code
const array: number[] = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator1(array);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const arrayString = ["Hello", "from", "world"];
const stringIterator = new ArrayIterator1<string>(arrayString);
console.log(stringIterator.next());
console.log(stringIterator.hasNext());
console.log(stringIterator.next());
console.log(stringIterator.hasNext());
console.log(stringIterator.next());
console.log(stringIterator.hasNext());
