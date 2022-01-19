// Há várias maneira de tipagem de objetos
// Tipando um objeto
const objectA: {
  // Podemos inserir o readonly, para não alterar o valor da chave
  readonly keyA: string;
  keyB: string;
  keyC?: string; // Chave opcional que pode ser inclusa ou não
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

// Podemos mudar os valores das chaves:
// objectA.keyA = 'Other value for A';
// Porém não podemos mudar o nome da chave, ou criar uma nova chave
objectA.keyC = 'Value C';
// Depois que tipamos o nosso objeto, podemos criar mais chaves
objectA.keyD = 'Value D';

// Impressão do objetcA
console.log(objectA);
