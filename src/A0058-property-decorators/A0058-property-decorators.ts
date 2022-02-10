// Decoradores de propriedades

// Criando decorador
function decorator(classPrototype: any, name: string | symbol): any {
  // Variavel para retornar um valor
  let propertyValue: any;
  return {
    // Get & Set criado para pegar o valor e configurar tal valor
    get: () => propertyValue,
    set: (value: any) => {
      // Condicional para verificar se o valor que recebemos é do tipo string
      if (typeof value === 'string') {
        // Encadeando metodos para reverter o valor da propriedade
        propertyValue = value.split('').reverse().join('');
        // Em seguida temos que parar a função
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  // Usando o decorator em name e lastname
  @decorator
  name: string;
  @decorator
  lastname: string;
  @decorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.name} ${this.lastname} says: ${msg}`;
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

const person = new Person('Leônidas', 'Junior', 32);
const sayHelloWorld = person.method('Hello World!');
console.log(person);
console.log(sayHelloWorld);
