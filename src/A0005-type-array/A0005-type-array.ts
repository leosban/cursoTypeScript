// Tipagem Array
// Há duas maneira de criação de arrays
// Generic -> Array<T> ou T[] - Onde substituimos o T pelo nosso próprio tipo;

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

// Função criada para concatenar strings, usando a segunda tipagem com '[]'
// usando o metódo reduce num único valor de retorno
export function concatString(...args: string[]): string {
  return args.reduce((acc, value) => acc + ' ' + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const resultString = concatString('Leônidas', 'Junior');

const results = multiplyArgs(1, 2, 3);

const upperCase = toUpperCase('leônidas');

console.log(results);

console.log(resultString);

console.log(upperCase);
