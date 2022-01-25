// Tipagem unkown, funiona como se fosse um 'n' mais seguro

let x: unknown;

x = 100;
x = 'Leonidas';
x = 900;
x = 10; // Alteramos o valor para number, assim a conta vai ser feita
const y = 800;

// O resultado ocorre por causa da concatenação
// Quando definimos o tipo unkown, devemos fazer a checagem antes, para nos assegurar
if (typeof x === 'number') console.log(x + y); // 810
