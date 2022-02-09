// Para alterar algo dentro da classe, sem mexer na original usamos os decorators
// ou seja, o decorador, vai decorar as classes
// É uma função qualquer, que vai receber a classe que vai ser decorada
// Fazemos a tipagem com generics <T> e restringimos com uma classe genérica
// Se construtor receber algo, identificamos com ...args
function invertNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  return class extends target {
    name: string;
    // Se quisermos alterar o parametro color, criamos o atributo aqui no decorator
    color: string;
    // Metodo criado para inverter os valores das strings
    invert(value: string): string {
      return value.split('').reverse().join('');
    }
    // Criamos o construtor para passar os ...args
    constructor(...args: any[]) {
      // Criamos o super para chamar o color de Animal, para a classe ficar instanciada
      super(...args);
      // Para pegar o argumento original de volta, pegamos args[0];
      // Podemos encadear metodos para fazer o que quisermos com a string
      this.color = this.invert(args[1]);
      this.name = this.invert(args[0]);
    }
  };
}

// Ex decorator de class:
// Chamamos o decorator com '@nomeDaFuncaoDecorator' onde a classe animal, passa
// automaticamente dentro do decorator
@invertNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {}
}

// Assim substituimos a classe pelo decorator
const animal = new Animal('Lion', 'brown');
console.log(animal);
