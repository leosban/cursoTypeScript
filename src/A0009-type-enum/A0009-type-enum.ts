// Tipagem enum, serve pra enumar alguma coisa
// Por ex uma tabela de cores, junto com um código para cada cor
// Usamos a palavra enum, pois ele é um tipo e um valor

// Podemos alterar a ordem do indice, começando do número que quisermos
// através do sinal de atribuição '='
// Podemos atribuir pelo nome da cor tb, como String
// Sendo que após isso devemos atribuir o 'indice', de qualquer chave, após
enum Colors {
  red,
  blue,
  yellow,
  purple,
}

// Podemos fazer merge de enum, por ex:
enum Colors {
  green = 4,
  gray,
  brown,
}

// console.log(Colors);

// Ao imprmir termos o 'indice' impresso!
// console.log(Colors.red);

// Ao invés do enum, para garantir que o código funcione corretamente
// é mais seguro usar um função, para fazer a chamada das cores, por ex:
function choiceColor(color: Colors): void {
  console.log(Colors[color]);
}

choiceColor(Colors.green);
