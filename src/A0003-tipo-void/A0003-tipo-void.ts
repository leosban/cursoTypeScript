// Tipo 'void' quer dizer que uma função ou metódo não retorna nada

// Dica: sempre ser explicito com o retorno das funções e metódos, mesmo que
// o typescript faça inferência corretamente, colocando sempre o tipo dos parametros
// mais o retorno

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Leônidas',
  lastname: 'Junior',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

noReturn('Leonidas', 'Junior');
person.showName();

export { person };
