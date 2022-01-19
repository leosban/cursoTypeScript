// Tipo tuple - exclusivo do typescript, podemos torná-la imutável
// Podemos ter num array o indice 0 um numero e o indice 1 uma string

const clientData: [number, string] = [1, 'Leônidas'];

// Podemos alterar o indice no array original, porém ele deve ser do msm tipo
clientData[0] = 100; // tipo number
clientData[1] = 'Junior'; // tipo string

console.log(clientData);
