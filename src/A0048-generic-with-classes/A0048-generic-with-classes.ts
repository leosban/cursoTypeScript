// Exemplo de uso de generics nas classes
export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

// Estrutura de dados stack
export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  // Metodo para adicionar elementos no final da pilha
  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  // Metodo para remover elementos do final da pilha
  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  // Metodo para checar se há elementos na pilha
  isEmpty(): boolean {
    return this.counter === 0;
  }

  // Metodo para saber o tamanho da stack
  size(): number {
    return this.counter;
  }

  // Metodo para mostrar pilha
  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
