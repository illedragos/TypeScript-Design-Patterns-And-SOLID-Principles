interface IPrint {
  print(document: Document): void;
}

interface IScan {
  scan(document: Document): void;
}

interface IFax {
  fax(document: Document): void
}

class MultiFunctionPrinter implements IPrint, IScan, IFax {
  print(document: Document) {
    console.log("Printing");
  }

  scan(document: Document) {
    console.log("Scan");
  }

  fax(document: Document) {
    console.log("Fax");
  }
}

class SimplePrinter implements IPrint {
  print(document: Document) {
    console.log("Printing");
  }
}
