// Padrão de projeto: Singleton - GoF | Factory Method - GoF
// Classe de ex para comunicação com BD, com private constructor
export class Database {
  // Aqui iremos salvar a instancia private static database, só poderá ser acessada dentro da class
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  // Metodo connect, para fazer conexao com a base de dados
  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Class Database está privada, então criamos o metodo para ser chamado e criar a Database
  // com os mesmos parametros, ou seja, valores, que serão recebidos
  static getDatabase(host: string, user: string, password: string): Database {
    // Condicional para verificar se o atributo private static database, possui algum dado na class
    // se houver algum valor o código finaliza aqui
    if (Database.database) return Database.database;
    // Caso não haja algum valor terá que passar os valores da Database para ser criada a conexão
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

// Variavel com dados da database
const dbOne = Database.getDatabase('localhost', 'root', '123456');
// Chamada do metodo de conexao
dbOne.connect();

const dbTwo = Database.getDatabase('localhost', 'root', '123456');
dbTwo.connect();

// Comparar para verificar se os objetos são iguais
console.log(dbOne === dbTwo);
