// Uso do 'this' polimorfico, ou seja, como tipo
// Classe de exemplo como calculadora
export class Calculator {
  constructor(public number: number) {}

  // Metodo de adição
  sum(n: number): this {
    this.number += n;
    return this;
  }

  // Metodo de subtração
  sub(n: number): this {
    this.number -= n;
    return this;
  }

  // Metodo de multiplicação
  multiply(n: number): this {
    this.number *= n;
    return this;
  }

  // Metodo de divisão
  divide(n: number): this {
    this.number /= n;
    return this;
  }
}

// Podemos usar a calculator estendendo em outra classe, juntamente com o this
export class SubCalculator extends Calculator {
  // Metodo de potenciação
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

// Variavel para criar uma nova conta
const calculator = new SubCalculator(10);
// Podemos fazer chamadas em cadeia, porque estamos usando a palavra this.
// Podemos usar o metodo da subcalculadora já que ela estende a classe calculadora
calculator.sum(5).multiply(2).divide(5).sub(1).pow(2);
console.log(calculator);

// Criação de padrão de projeto da GoF
// Ex de classe criada, como se fosse fazer uma requisição de um server na web
export class RequestBuilder {
  // Criamos o atributo que se refere ao metodo da requisição e vai ser inicializado como null
  private method: 'get' | 'post' | null = null;
  // Criamos o atributo da url que vai receber uma string
  private url: string | null = null;

  // Metodo criado para configurar o method
  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  // Metodo criado para configurar a url
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  // Metodo criado, para mandar a requisição
  send(): void {
    console.log(`Sending data via ${this.method} for ${this.url}`);
  }
}

// Uso da classe para fazer o metodo request encadeado através do metodo builder
const request = new RequestBuilder();
request.setUrl('https://wwww.google.com').setMethod('post').send();
