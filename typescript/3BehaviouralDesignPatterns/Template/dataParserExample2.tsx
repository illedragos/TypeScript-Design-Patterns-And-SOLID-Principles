console.log("start-Index-2025");

abstract class DataParser {
  public parseData(): void {
    this.loadData();
    const data = "Sample Data";
    const parsedData = this.parse(data);
    this.validateData(parsedData);
    this.useData(parsedData);
  }

  protected loadData() {
    console.log("Load data");
  }
  protected validateData(parsedData: any): void {
    console.log(`Validating data ${parsedData}`);
  }
  protected useData(parsedData: any): void {
    console.log(`Using data ${parsedData}`);
  }

  protected abstract parse(data: any): string;
}

class JSONParser extends DataParser {
  protected parse(data: string): any {
    console.log(`Parsing ${data} as JSON`);
    //JSON.parse(data)
    return data;
  }
}

class XMLParser extends DataParser {
  protected parse(data: string): any {
    console.log(`Parsing ${data} as XML`);
    return data;
  }
}

//Client code
function parseData(parser: DataParser) {
  parser.parseData();
}

parseData(new JSONParser());
console.log("----------");
parseData(new XMLParser());
