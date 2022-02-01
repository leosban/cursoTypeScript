// Funciona da mesma forma que no JS
// Porém a definição do constructor() é diferente

// Criando a classe employees, que será usada como tipo
export class Employees {
  // Construtor feito com atalho nos argumentos, onde tudo será definido
  constructor(public readonly name: string, public readonly lastname: string) {}
}

// Podemos também exportar a classe logo de cara
export class Company {
  // Criando atributo público no modo somente leitura de maneira verbosa
  // Ele é redundante, pois se não o passarmos quer dizer que o atributo é público
  public readonly name: string;
  // Criação de atributo sendo um array de colaboradores da empresa
  // Será privado, para não ser acessado ou modificado fora da classe
  private readonly employees: Employees[] = []; // eslint-disable-line
  // Criação de atributo que é acessível apenas dentro da classe
  protected readonly cnpj: string;

  // Construtor para inicializar o atributo name
  // Assim podemos usar a classe sem erros
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  // Metódo publico, para adicionar um funcionário na empresa
  addEmployee(employee: Employees): void {
    // Push para adicionar colaboradores no array vazio
    this.employees.push(employee);
  }
  // Metódo para mostrar colaboradores
  showEmployees(): void {
    // eslint-disable-next-line no-class-assign
    for (const employee of this.employees) {
      console.log(employee);
    }
  }
}

// Ex de uso de classe
const companyOne = new Company('Facebook', '11.111.111/0001-11');
console.log(companyOne);

// Acessamos o valor diretamente, pois trata-se de uma chave pública
console.log(companyOne.name);

// Não alteramos o valor diretamente de name, pois o atributo está como somente
// leitura
// companyOne.name = 'Facebook';

// Criando employees
const employeeOne = new Employees('Leônidas', 'Junior');
const employeeTwo = new Employees('Leony', 'Melo');
const employeeThree = new Employees('Anelice', 'Melo');

console.log(employeeOne);
console.log(employeeTwo);
console.log(employeeThree);

// Adicionando colaboradores na empresa
companyOne.addEmployee(employeeOne);
companyOne.addEmployee(employeeTwo);
companyOne.addEmployee(employeeThree);

console.log(companyOne);

companyOne.showEmployees();
