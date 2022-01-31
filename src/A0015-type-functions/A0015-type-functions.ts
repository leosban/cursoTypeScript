// Funções como tipos

// 'Tipando' a função
type MapStringCallback = (item: string) => string;

// Ex de função que irá ser tipada
function mapStrings(array: string[], callbackfn: MapStringCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

// Usaremos a função para transformar em maiusculas
const abc = ['a', 'b', 'c'];
const mappedUpper = mapStrings(abc, (item) => item.toUpperCase());

console.log(mappedUpper);
