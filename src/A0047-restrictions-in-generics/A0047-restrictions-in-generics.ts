// Fazendo restrições em generics

// Exemplo de uma função com obtem uma chave de um objeto
// Usamos a palavra 'extends' para fazer uma restrição no tipo
type getKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

// Função criada para usar o tipo acima
const getKey: getKeyFn = (object, key) => object[key];

// Variavel criada, para obter uma chave no futuro
const animal = {
  name: 'Lion',
  color: 'brown',
  age: 15,
};

const colorAnimal = getKey(animal, 'age');

console.log(colorAnimal);
