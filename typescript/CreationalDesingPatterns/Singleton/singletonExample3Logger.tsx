class Logger {

  private static instance: Logger | null;

  private constructor() {

  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`${timestamp} - ${message}`)
  }

}

const logger1 = Logger.getInstance();
logger1.log('1Dragos');

const logger2 = Logger.getInstance();
logger2.log('2Ille');

class Application {

  constructor(private logger: Logger) {
  }

  run(): void {
    this.logger.log('Application is running');
    this.logger.log('Application is shutting down')
  }

}

//The problem now is that application is very tightly coupled to the logger class in order to instantiate the
// application you would have to have the logger class instantiated

let logger = Logger.getInstance();
let app = new Application(logger);

app.run()
