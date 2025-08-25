interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;
  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    //Returning a handler allows convinient chaining
    return handler;
  }
  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "banana") {
      return `Monkey eats the ${request}`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "nut") {
      return `Squirrel eats the ${request}`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "meatBall") {
      return `Dog eats the ${request}`;
    }
    return super.handle(request);
  }
}

//Client code
function clientCode(handler: Handler) {
  const foods = ["nut", "banana", "coffee", "meatBall"];
  for (const food of foods) {
    console.log(`who eats the ${food}`);
    const result = handler.handle(food);
    if (result) {
      console.log(result);
    } else {
      console.log(`${food} was left untouched`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

//Chaining handlers
monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
