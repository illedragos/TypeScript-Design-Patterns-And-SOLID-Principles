//without the principle
// class MySqlDatabase {
//   save(data: string): void {

//   }
// }

// class HighLevelModule {
//   constructor(private database: MySqlDatabase) {
//   }
//   execute(data: string) {
//     this.database.save(data)
//   }
// }
// a save function is required by all the databases

//without the principle

interface IDatabase {
  save(data: string): void;
}


class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved to MySqlDatabase`)
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved to Mongodb`)
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {
  }
  execute(data: string) {
    this.database.save(data)
  }
}

let mysql: MySqlDatabase = new MySqlDatabase();
let mongo: MongoDbDatabase = new MongoDbDatabase();

let user: HighLevelModule = new HighLevelModule(mysql);

let post: HighLevelModule = new HighLevelModule(mongo);

user.execute("John");
post.execute("New Post");
