// Predicado de tipos
// Função de ex para checar se número é um number
// Incluímos o predicado da função no retorno da mesma, quando o valor retornado for
// do tipo boolean
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// Criação da função soma usando a função do tipo predicate acima
export function sum<T>(...args: T[]): number | null {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return result;
}

// Chamada da função com string
// console.log(isNumber('1'));

// Chamada da função com number
// console.log(isNumber(1));

// Chamada da função sum, com números, a função é inferida do tipo number
console.log(sum(1, 2, 3));

// Chamada da função sum, com string, a função é inferida do tipo string
console.log(sum(''));

// Chamada da função sum, com qualquer valor, a função é inferida do tipo string | number
// nesse caso, usamos spread junto com array, as strings serão ignoradas
// a soma irá continuar normalmente
console.log(sum(...[1, 2, 3, 'L', 'e', 'o', 4, 5, 6]));
