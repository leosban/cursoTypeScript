// Tipo de não valor, ou seja, nunca vai retornar nada, por ex
// Um laço infinito ou um erro

// Então especificamos com a tipagem 'never'
// Desse modo trava a aplicação
export function createError(): never {
  throw new Error('Any error');
}

createError();
