// Tipo que não devemos usar no nosso código, pois se refere
// a qualquer tipo ou 'n' tipos;

// Quando definimos o tipo 'any' explicitamente, podemos
// usar a função com qualquer coisa
// Devemos usar o any, apenas em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
