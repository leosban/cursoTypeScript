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

export class Student extends Person {}

export class Client extends Person {}

const person = new Person('Leônidas', 'Junior', 32, '111.111.111-11');
console.log(person);

const student = new Student('Leônidas', 'Junior', 32, '111.111.111-11');
console.log(student);

const client = new Client('Leônidas', 'Junior', 32, '111.111.111-11');
console.log(client);
