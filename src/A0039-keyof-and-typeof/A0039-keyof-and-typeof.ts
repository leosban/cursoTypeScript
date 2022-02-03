// keyof e typeof no campo do tipo

// Pegamos o tipo de um objeto a partir de um valor com o typeof
type ColorsObj = typeof colorsObj;
// A partir do tipo, também podemos pegar as chaves de um objeto, através de unio de todas as
// chaves existentes no objeto
type KeyColors = keyof ColorsObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  marrom: 'brown',
};

function translateColor(color: KeyColors, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
console.log(translateColor('marrom', colorsObj));
console.log(translateColor('azul', colorsObj));
