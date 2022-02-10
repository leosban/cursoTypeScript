/* eslint-disable @typescript-eslint/no-namespace */
// Namespace é um arquivo ou módulo, que já é nativo no es6, onde podemos importar
// ou exportar esse módulo

// Só podemos usar as coisas dentro do namespace, se tentar usarmos fora
// o retorno será undefined, pois fora, ela não existe
// Para usar para fora, usamos export
namespace MyNameSpace {
  // Podemos inserir qualquer coisa que irá funcionar
  // Para pegar essa váriavel usamos a palavra export, porém não funciona no es6
  export const nameOfNameSpace = 'Leônidas';
  // Criação de classe como exemplo
  export class NameSpacePerson {
    constructor(public name: string) {}
  }
  // Instanciando a classe dentro do namespace
  const person = new NameSpacePerson('Junior');

  // Para acessar a const abaixo temos que exportar o namespace que já está
  // dentro de um namespace
  export namespace OtherNameSpace {
    export const nameOfNameSpace = 'Name at the other namespace';
  }
}
