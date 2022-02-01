// Atributos e metódos estáticos -> metódo que pode ser acessado
// sem insstanciar a classe

export class Person {
  // Podemos criar atributos estáticos
  static standardAge = 0;
  static standardCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  // Exemplo metodo estatico
  static sayHello(): void {
    console.log('Hello!');
  }

  // Não conseguimos acessar algo estatico dentro de um metodo com 'this'
  // ao invés disso, temos que chamar o nome da classe, ou seja, chamamos pela instancia
  normalMethod(): void {
    console.log(Person.standardAge, Person.standardCpf);
  }

  // Exemplo de metodo estático para criar pessoa
  // Criando um objeto da classe, sem passar todos os argumentos
  static createPerson(name: string, lastName: string): Person {
    // Apos criar os metodos estaticos podemos usa-los fora da classe, sendo atribuidos como parametros
    return new Person(name, lastName, Person.standardAge, Person.standardCpf);
  }
}

const person = new Person('Leônidas', 'Junior', 32, '111.111.111-11');

// Chamada do metodo estatico para criar uma nova pessoa, sem idade e cpf
const personTwo = Person.createPerson('Leony', 'Melo');
person.cpf = '987.654.321-00';

console.log(person);
console.log(personTwo);

// Fazendo a chamada dos atributos estáticos
person.normalMethod();

// Acessando o metodo estatico
Person.sayHello();
