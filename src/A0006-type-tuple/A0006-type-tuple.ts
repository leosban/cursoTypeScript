// Tipo tuple - exclusivo do typescript, podemos torná-la imutável
// Podemos ter num array o indice 0 um numero e o indice 1 uma string

// Podemos definir para a tupla ser imutável através da prop readonly
const clientData: readonly [number, string] = [1, 'Leônidas'];

const clientDataOne: [number, string, string] = [1, 'Leônidas', 'Bandeira'];
// Podemos determinar se um dos argumentos é opcional ou não...
const clientDataTwo: [number, string, string?] = [1, 'Leônidas'];
// Podemos usar o rest operator, para add strings, numbers ou outras coisas
const clienteDataThree: [number, string, ...string[]] = [1, 'Leônidas'];

// Podemos alterar o indice no array original, porém ele deve ser do msm tipo
// Ao add a prop readonly é impossível mudar os dados de determinado array
// clientData[0] = 100; // tipo number
// clientData[1] = 'Junior'; // tipo string

console.log(clientDataOne);
console.log(clientDataTwo);
console.log(clientData);
console.log(clienteDataThree);
