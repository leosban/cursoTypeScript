// Overload de função
// Baseado nos params que a função receber, ela vai se comportar de maneira diferente

// Tipo de função como exemplo
// Com 3 tipos de assinaturas diferentes, esses 3 tipos vao para a mesma função
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

// função criada do tipo Adder, que criamos acima, com as devidas assinaturas
// params de 'y' vai ser opcional para garantir a assinatura somente com o 'x'
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  // Checagem se há algum valor em 'args'
  // Em seguida somamos x e y junto com args, para fazer a soma de tudo
  if (args.length > 0)
    return args.reduce((sum, value) => sum + value, 0) + x + (y || 0);
  // Avaliação de curto circuito criada para o valor de 'y' não retornar undefined
  return x + (y || 0);
};

// Uso da função com 'x'
console.log(adder(1));

// Uso da função com 'x' e 'y'
console.log(adder(10, 20));

// Uso da função com 'x', 'y' e os overloads
console.log(adder(98, 31, 3213, 81231));
