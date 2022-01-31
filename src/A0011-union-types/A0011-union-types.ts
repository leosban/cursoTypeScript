// Quando um parametro ou retorno de uma variavel ou função, pode ter
// mais de um tipo, usamos o sinal de '|' usando como 'OU'

// Função de exemplo tipada como number
export function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(19, 23));

// Função de exemplo, tipada como number ou string
// Nesse caso deve haver uma checagem antes do retorno da função
// para verificar se de fato iremos receber number ou string nos params
function addOrConcat(a: number | string, b: number | string) {
  // Checagem se são numbers
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // Caso os params não forem numbers, iremos retornar com templates literals
  return `${a} ${b}`;
}

console.log(addOrConcat(10, 80));
console.log(addOrConcat('Leônidas', 'Junior'));
