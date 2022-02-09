// Para que o decorator possa receber params, precisamos de uma função que faça isso
// ou seja, receber os params. Nesse caso inserimos a função anterior dentro dessa
// nova função
function invertNameAndColor(param1: string, param2: string) {
  // Closure -> podemos usar os params1 e params2 para dentro da função anonima,
  // ou seja, podemos usa-los em qualquer lugar
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      name: string;
      color: string;
      invert(value: string): string {
        return (
          value.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
      constructor(...args: any[]) {
        super(...args);
        this.color = this.invert(args[1]);
        this.name = this.invert(args[0]);
      }
    };
  };
}

// Passamos params para os decoradores
@invertNameAndColor('ValueOne', 'ValueTwo')
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('Lion', 'brown');
console.log(animal);
