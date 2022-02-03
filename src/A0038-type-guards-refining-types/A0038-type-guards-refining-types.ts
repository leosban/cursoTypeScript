// Uso de type guards para refinar um tipo
// Definimos o retorno da saída da função como seguros, fazendo condicionais para isso
// para verificar se o retorno é de um tipo ou de outro
export function sum(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

// Impressão com a chamada da função com os dois tipos
console.log(sum(12, 20));

console.log(sum('Leo', 'nidas'));

// Exemplos de type guards em classes e objetos
type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
}

// função criada para uso da class com type guard para fazer a checagem se o nome de fato existe
// no objeto
function showName(obj: PersonOrAnimal): void {
  if ('name' in obj) console.log(obj.name);
}

showName(new Student('Junior'));
