// Composição entre classes

// Criação da classe carro para fazer a composição, ou seja,
// instancia uma classe dentro da outra
export class Car {
  // Criamos o atributo engine, não usamos tipos, porque já estamos atribuindo e vai ser inferido
  private readonly engine = new Engine();
  // Criação do metodo ligar
  start(): void {
    this.engine.start;
  }
  // Criação do metodo acelerar
  accelerate(): void {
    this.engine.accelerate;
  }
  // Criação do metodo parar
  stop(): void {
    this.engine.stop;
  }
  // Criaão do metodo desligar
  turnOff(): void {
    this.engine.turnOff;
  }
}

export class Engine {
  // Criação do metodo ligar
  start(): void {
    console.log('The car is on');
  }
  // Criação do metodo acelerar
  accelerate(): void {
    console.log('The car is speeding up');
  }
  // Criação do metodo parar
  stop(): void {
    console.log('The car is stopped');
  }
  // Criaão do metodo desligar
  turnOff(): void {
    console.log('The car is off');
  }
}

const car = new Car();
car.start();
car.accelerate();
car.stop;
car.turnOff();
