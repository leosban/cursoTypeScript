// Implementação de tipo alias em classes

// Criando classe abstrata
// Transformamos a classe abstrata em tipo
type TypePerson = {
  name: string;
  lastname: string;
  completeName(): string;
};

// Criação da class Person que extende de TypePerson
// Quando usamos um tipo, usamos a palavra 'implements', ou seja, implementa um tipo
// definido anteriormente
export class Person implements TypePerson {
  constructor(public name: string, public lastname: string) {}

  // Criação do metódo para fazer o nome completo
  completeName(): string {
    return this.name + ' ' + this.lastname;
  }
}

// Variavel para criação de pessoa
const person = new Person('Leônidas', 'Junior');
console.log(person.completeName());
