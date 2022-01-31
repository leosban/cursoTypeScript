// Tipando o 'this' dentro de uma função
// tipando o 'this' como 'Date', não sendo argumento da função
export function fn(this: Date, argOne: string): void {
  console.log(this);
  console.log(argOne);
}

// Chamada da função com call, para resolver problema do this, dizendo que é o 'this' da função
// no primeiro argumento da função, podemos definir mais de um argumento na função
fn.call(new Date(), 'Leônidas');
