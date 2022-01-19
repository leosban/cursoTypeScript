// Tipo null e undefined

// Quando não definimos o valor de de uma variavel, podemos fazer um estreitamento
// de tipo
let x;
// Fazemos a checagem de x e caso atenda a condição definimos um valor para a
// variavel;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// Função cria pessoa, com params opcional, temos que trabalhar conscientemente
// com os params opcionais, pois na prog sempre precisamos ter
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Criando função do tipo 'any' e fazendo a checagem do params
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
