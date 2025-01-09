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
    console.log(`${timestamp} ${message}`)
  }

}

const logger1 = Logger.getInstance();
logger1.log('1Dragos');

setTimeout(() => {
  const logger2 = Logger.getInstance();
  logger2.log('2Ille');
}, 1000)
