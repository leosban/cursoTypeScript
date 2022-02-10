// Decoradores de parametros -> funciona para assistir o que o parametro tem ou o que
// ele é;

// Criando decorador para o parametro msg em method
function decorator(
  classPrototype: any,
  methodName: string | symbol,
  // index seria a posição do parametro no metodo
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class Person {
  name: string;
  lastname: string;
  age: number;

  // Podemos decorar também o construtor da classe
  constructor(
    @decorator name: string,
    @decorator lastname: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname} says: ${msg}!`;
  }
  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }
  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

// Instanciando a classe
const person = new Person('Leônidas', 'Junior', 32);
// Chamada do metódo
const method = person.method('Hello World!');
console.log(method);
