// Para usar a biblioteca em TS além de instalar a biblioteca é preciso instalar
// a tipagem dessa biblioteca
// No caso do validator instalamos assim: npm i validator @types/validator
// Ou instalar primeiro a biblioteca em seguida: @types/validator -D

// Importando o validator
import validator from 'validator';

// Importando lodash
// Umas das melhores bibliotecas para javascript
import _ from 'lodash';

// Testando validator
console.log(validator.isEmail('leosban@terra.com.br'));

// Testando lodash
console.log(_.clone([1, 2, 3, 4, 5, 6]));
