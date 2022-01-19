/* eslint-disable */
// Type Annotation, informamos para o typescript o tipo da
// varialvel que iremos usar;

// Tipos básicos (ocorre inferência de tipos)
let nome: string = 'Leonidas'; // Qualquer tipo de string
let idade: number = 30; // Qualquer tipo de number, decimal ou hexadecimal
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // Symbol
// let big: bigint = 10n; // bigint (sublinhado pois o target é o es2015)

// Tipos passados por referência

// Array
let arrayOfNumbers: Array<number> = [1, 2, 3,];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

// Objetos
// Podemos deixar uma chave opcional com o símbolo de '?'
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Leonidas',
  idade: 32,
  adulto: true,
};

console.log(pessoa);


// Funções
// Podemos inserir a tipagem da função e dos parâmetros
function sum(x: number, y: number): number {
  return x + y;
}

// Podemos fazer também um alias na função
const sumTwo:(x: number, y: number) => number = (x, y) => x + y;



