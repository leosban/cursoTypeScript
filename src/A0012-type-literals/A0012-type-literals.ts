// Tipos literais, ou seja, podemos usar valores como tipos

let x = 99;
x = 0b1010; //eslint-disable-line
const y = 90 ;//eslint-disable-line
const a = 500; //eslint-disable-line

const person = { //eslint-disable-line
  // Dessa forma usamos o valor como tipo, pq usando 'as const'
  // o valor se torna imutável, pois é do tipo literal
  name: 'Leonidas' as const,
  lastname: 'Junior',
};

// Não podemos alterar o valor da chave do objeto
// o valor foi atribuido como tipo, sendo imutavel
// person.name = 'Santos';

// Module mode
export default 1;
