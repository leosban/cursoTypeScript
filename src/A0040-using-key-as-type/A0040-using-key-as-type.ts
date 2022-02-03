// Usar chaves como tipo, ajuda a manter um clean code em determinados
// momentos

// Ex de tipo que será usado
type Vehicle = {
  brand: string;
  year: number;
};

// Criação de um novo tipo com espelhamento das chaves acima
type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Mustang',
};

console.log(car);
