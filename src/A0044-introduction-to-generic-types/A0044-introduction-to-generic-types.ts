// Introdução aos tipos genericos

// Iremos fazer a função filter() como exemplo
// Função de callback tipada
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// Inserimos o tipo generico na função com o metodo: <T>
export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// Teste para chamada da função com filter da engine
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const originalArrayFiltered = array.filter((value) => value < 5);
console.log(originalArrayFiltered);

// Teste para chamada da função com filter criado acima
const ArrayFiltered = myFilter(array, (value) => value < 5);
console.log(ArrayFiltered);
