interface IMySql {
  connectToMySql(uri: string): void;
  executeMySqlQuery(query: string): void;
}

class MySqlDatabaseA implements IMySql {
  connectToMySql(uri: string): void {
    console.log(`MySql connected at uri ${uri}`);
  }
  executeMySqlQuery(query: string): void {
    console.log(`MySql executed ${query}`);
  }
}

interface IPostgreSql {
  connectToPostgres(uri: string): void;
  executePostgres(query: string): void;
}

class PostgreSQLDAtabaseA implements IPostgreSql {
  connectToPostgres(uri: string): void {
    console.log(`Postgres connected with uri ${uri}`);
  }
  executePostgres(query: string): void {
    console.log(`Postgress executed ${query}`);
  }
}

class DatabaseAapterPostgrestoMySql implements IMySql {
  constructor(private postgreSQL: IPostgreSql) {}
  connectToMySql(uri: string): void {
    this.postgreSQL.connectToPostgres(uri);
  }
  executeMySqlQuery(query: string): void {
    this.postgreSQL.executePostgres(query);
  }
}

//clientCode

let database = new MySqlDatabaseA();
database.connectToMySql("mysql://localhost:3306/mydb");
database.executeMySqlQuery("SELECT * FROM * users");

const mySqldatabse = new MySqlDatabaseA();
const postgressDatabse = new PostgreSQLDAtabaseA();

const DatabasePostgresAdapted = new DatabaseAapterPostgrestoMySql(
  postgressDatabse
);

DatabasePostgresAdapted.connectToMySql("URI 1");
DatabasePostgresAdapted.executeMySqlQuery("SQL 1");
