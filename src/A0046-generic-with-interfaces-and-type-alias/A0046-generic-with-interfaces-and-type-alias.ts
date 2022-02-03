// Usando generic com interface e type alias, muda de acordo onde colocamos os generics

// Ao invés de inferir o tipo de fato usamos generic <T>
// Definimos o que cada generico vai ser, se number ou string, por exemplo
// quando chamassemos o protocolo, não precisar dizer os tipos
interface ProtocolPerson<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

// Implementando a interface na variavel
const student: ProtocolPerson<string, number> = {
  name: 'Leônidas',
  lastname: 'Junior',
  age: 32,
};

console.log(student);
