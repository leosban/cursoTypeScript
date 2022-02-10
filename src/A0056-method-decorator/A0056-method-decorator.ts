// Criando decorador com classPrototype
function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  // Impressões do que podemos usar nesse decorator
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    // Definimos que o metodo não pode receber alguma atribução ou alteração
    // writable: false
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

// Decorador de metodos
export class Person {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  // Decorador sendo chamado no metódo
  @decorator
  method(msg: string): string {
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
