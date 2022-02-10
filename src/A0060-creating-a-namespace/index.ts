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

// Impressão da const do namespace, fora do escopo
console.log(constOfNameSpace);
