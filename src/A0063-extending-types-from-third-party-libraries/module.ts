// Namespaces uteis
// Importando lodash
import _ from 'lodash';

// Criação de função para multiplicar números no array
_.mul = function (array: number[]): number {
  return array.reduce((total, curr) => total * curr, 1);
};

// Atrelando algo no global do node
// global.MYGLOBAL = 'Value of my global';

export default _;
