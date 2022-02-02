// Interfaces, na maioria dos casos são identicos a type alias

// Implementação de tipo alias em classes

// Criando classe abstrata
// Transformamos a classe abstrata em tipo
// Para converter um type para interface, apenas trocamos o nome de 'type' para 'interface'
// sem o sinal de atribuição
interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface CompleteName {
  completeName(): string;
}

// Criando um tipo de pessoa, através de interseção
type TypePerson = TypeName & TypeLastName & CompleteName;

// Podemos extender uma interface, com interfaces criadas anteriormente
interface TypePersonTwo extends TypeName, TypeLastName, CompleteName {}

// Criação da class Person que extende de TypePerson
// Quando usamos um tipo, usamos a palavra 'implements', ou seja, implementa um tipo
// definido anteriormente
export class Person implements TypePersonTwo {
  constructor(public name: string, public lastname: string) {}

  // Criação do metódo para fazer o nome completo
  completeName(): string {
    return this.name + ' ' + this.lastname;
  }
}

// Implementar uma interface num objeto
const objectPerson: TypePersonTwo = {
  name: 'Leony',
  lastname: 'Melo',
  completeName() {
    return this.name + ' ' + this.lastname;
  },
};

// Variavel para criação de pessoa
const person = new Person('Leônidas', 'Junior');
console.log(person.completeName());

// Impressão do objectPerson
console.log(objectPerson.completeName());
