// Type Alias e interfaces são praticamente a mesma coisa
// ou seja, podemos usar um ou outro e um e outro na mesma classe
// há diferenças, não podemos usar o mesmo identificador usando a palavra
// type e interface, para usar os mesmos idenficadores, somente usando a
// palavra 'interface', nesse caso acontece um declaration merge, ou seja,
// as duas interefaces serão unidas para gerar um objeto maior

interface Person {
  readonly name: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  name: 'Leônidas',
  lastname: 'Junior',
  address: ['Rua da Floresta', '60'],
};

console.log(person);
