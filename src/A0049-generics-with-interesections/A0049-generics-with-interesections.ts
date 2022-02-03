// Usando generics com intersections
// Exemplo de função para unir/juntar dois objetos

// Fazendo inferencia dos tipos com generics
export function joinObjects<O1, O2>(objOne: O1, objTwo: O2) {
  return { ...objOne, ...objTwo };
}

const objOne = { keyOne: 'valueOne' };
const objTwo = { keyTwo: 'valueTwo' };
const unionObjects = joinObjects(objOne, objTwo);
console.log(unionObjects);
