// Asserções -> Coerção de tipos

// Uso de exemplo de asserções

// Condicional, para refiinar o tipo
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red ';

// Non-null assertion (!)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body2 = document.querySelector('body')!;
if (body2) body2.style.background = 'red ';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
if (body3) body3.style.background = 'red ';

// HTMLElement, mais uma asserção de tipos
// Garantimos que 'input' é um elemento HTML
const input = document.querySelector('.input') as HTMLInputElement;
// Podemos usá-lo como um verdadeiro elemento HTML
input.value = 'anything';
input.focus();

// Não podemos fazer a asserção do elemento HTML como number
// pois o 'number' não tem a ver com o elemento HTML referido
// para reverter a situação usamos 'unknown' e depois o definimos como number
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const body4 = document.querySelector('body') as unknown as number;
