// Criamos o esse arquivo para ser global
// Para que possamos usar a função de multiplicação do array
// para o TS ter acesso ao que está aqui dentro, no sistema todo

// Criação do declare
// Fazendo isso é feito o declaration merge com o namespace do lodash
declare namespace _ {
  // Em seguida é feito o merge da interface com o LoDashStatic
  declare interface LoDashStatic {
    // Fazendo declaração da assinatura do mul
    mul(array: number[]): number;
  }
}

// Depois de feito isso, podemos usar o mul no TS
