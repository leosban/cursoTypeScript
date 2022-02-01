// Get -> para pegar o valor do atributo definido anteriomente como privado
// ou seja, acessá-lo por fora da classe, podemos entregar o valor como quisermos
// Set -> configurar o valor do atributo que definimos antes

export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected _cpf: string,
  ) {}

  // Setter criado para configurar o valor do cpf
  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    // RegExp para mostrar somente números
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Leônidas', 'Junior', 32, '111.111.111-11');
person.cpf = '987.654.321-00';

console.log(person.cpf);
