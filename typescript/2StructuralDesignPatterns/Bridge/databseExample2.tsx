interface IDatabase1 {
  connect(): void;
  query: (query: string) => any;
  close(): void;
}

class PostgreSQLdb implements IDatabase1 {
  connect(): void {
    console.log("PostgreSQLdb connected");
  }
  query(sql: string): any {
    console.log(`Query: ${sql} executed`);
  }
  close(): void {
    console.log("PostgreSQL connetion closed");
  }
  //@question
  //why not add here a method that will perform both 3 operations?
}

class MongoDBdb implements IDatabase1 {
  connect(): void {
    console.log("MongoDBdb connected");
  }
  query(sql: string): void {
    console.log(`Query: ${sql} executed`);
  }
  close(): void {
    console.log("MongoDB closed");
  }
}

abstract class DatabaseService {
  constructor(protected database: IDatabase1) {}
  abstract fetchData(query: string): void;
}

class ClientDatabaseService extends DatabaseService {
  public fetchData(query: string) {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

//@qusetion why not this way?
// class DatabaseService {
//   constructor(protected database: IDatabase1) {}
//   public fetchData(query: string): void {
//     this.database.connect();
//     this.database.query(query);
//     this.database.close();
//   }
// }

//Client Code
let postgreService = new ClientDatabaseService(new PostgreSQLdb());
postgreService.fetchData("SELECT * DOCUMENTS");
console.log("--------------------");
let mongoDBService = new ClientDatabaseService(new MongoDBdb());
mongoDBService.fetchData("SELECT * USERS");
