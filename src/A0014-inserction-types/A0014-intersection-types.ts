// Intersection types -> Usado com o '&' comercial

// Iremos criar tipos enxutos, para serem usado em objetos, ou seja,
// criamos tipos pequenos, para formar outros tipos

type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };

// Iremos combiná-los para fazer outros tipos
type Person = hasName & hasLastName & hasAge;

// Ex de objeto criado, passando como tipo, o que foi definido antes
// porém o objeto fica muito relaxado
const Person: Person = {
  age: 32,
  name: 'Leônidas',
  lastName: 'Junior',
};

console.log(Person);

// Module mode
export { Person };
