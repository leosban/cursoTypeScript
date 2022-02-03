// Genericos que existem dentro da engine
type MyType = number;

// Metodo Array<> é um tipo de generico nativo
const numbersArray: Array<number> = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Outro tipo de generico existente na engine são as promises
// Ex de promise com uma funçao assíncrona
async function promiseAsyn() {
  return 1;
}

// Podemos definir a saida da promise com qualquer tipo
function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// Chamada da promessa assincrona
promiseAsyn().then((result) => console.log(result + 1));

// Chamada da minha promessa com setTimeout
myPromise().then((result) => console.log(result + 2));
