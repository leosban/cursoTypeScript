/* eslint-disable @typescript-eslint/no-namespace */
// Namespace é um arquivo ou módulo, que já é nativo no es6, onde podemos importar
// ou exportar esse módulo
// Só podemos usar as coisas dentro do namespace, se tentar usarmos fora
// o retorno será undefined, pois fora, ela não existe
// Para usar para fora, usamos export
var MyNameSpace;
(function (MyNameSpace) {
  // Podemos inserir qualquer coisa que irá funcionar
  // Para pegar essa váriavel usamos a palavra export, porém não funciona no es6
  MyNameSpace.nameOfNameSpace = 'Leônidas';
  // Criação de classe como exemplo
  var NameSpacePerson = /** @class */ (function () {
    function NameSpacePerson(name) {
      this.name = name;
    }
    return NameSpacePerson;
  })();
  MyNameSpace.NameSpacePerson = NameSpacePerson;
  // Instanciando a classe dentro do namespace
  var person = new NameSpacePerson('Junior');
  // Para acessar a const abaixo temos que exportar o namespace que já está
  // dentro de um namespace
  var OtherNameSpace;
  (function (OtherNameSpace) {
    OtherNameSpace.nameOfNameSpace = 'Name at the other namespace';
  })(
    (OtherNameSpace =
      MyNameSpace.OtherNameSpace || (MyNameSpace.OtherNameSpace = {})),
  );
})(MyNameSpace || (MyNameSpace = {}));
/* eslint-disable @typescript-eslint/triple-slash-reference */
// Para importar o module usamos o metodo abaixo, através do sistema
// de modulos do typescript
/// <reference path="module.ts" />
// Impressão das coisas do modulo
console.log(MyNameSpace.NameSpacePerson);
// Porém nada será impresso, pq estamos usando o sistema de modulo em tsconfig.json
// em "module": "commonjs"
// Para fazer a impressão do código usamos o metodo abaixo:
// Irá ser criado na mesma pasta um arquivo .js como se fosse um bundle
// npx tsc src/A0060-creating-a-namespace/index.ts --outFile src/A0060-creating-a-namespace/index.js
