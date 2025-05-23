// Module 1: The NiceBook class
class NiceBook {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  getInfo(): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

// Module 2: The Library class
class Library {
  private books: NiceBook[] = [];

  addBook(book: NiceBook): void {
    this.books.push(book);
    console.log(`Book '${book.title}' added to the library.`);
  }

  listBooks(): void {
    this.books.forEach((book) => console.log(book.getInfo()));
  }
}

// Using the modules
const book1 = new NiceBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new NiceBook("1984", "George Orwell", "9780451524935");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.listBooks();
