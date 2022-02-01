// Usamos a palavra 'super' para ter acesso a super classe, ou seja, na classe principal

export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }
  getCompleteName(): string {
    return this.name + ' ' + this.lastname;
  }
}

// Adicionando novo atributo sala na class, usando 'super' para ter acesso a super classe, dentro
// de uma subclasse
export class Student extends Person {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public sala: string,
  ) {
    super(name, lastname, age, cpf);
  }
}

export class Client extends Person {}

const person = new Person('Leônidas', 'Junior', 32, '111.111.111-11');
console.log(person);

const student = new Student('Leônidas', 'Junior', 32, '111.111.111-11', '0010');
console.log(student);

const client = new Client('Leônidas', 'Junior', 32, '111.111.111-11');
console.log(client);
