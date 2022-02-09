interface Constructor {
  new (...args: any[]): any;
}

// Composição de decoradores
function invertNameAndColor(param1: string, param2: string) {
  // Fazemos a tipagem do Constructor para não repetir código
  return function (target: Constructor) {
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

// Outra função criada como um decorator
function otherDecorator(target: Constructor) {
  console.log('I am other decorator');
  return target;
}

// Podemos passar mais de um decorador para a classe
@otherDecorator
@invertNameAndColor('ValueOne', 'ValueTwo')
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('Lion', 'brown');
console.log(animal);
