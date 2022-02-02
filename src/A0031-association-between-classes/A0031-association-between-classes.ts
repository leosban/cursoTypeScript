// Criação da classe Escritor, para fazer a associação com as ferramentas de escrita
export class Writer {
  // Criação do atributo private _ferramenta com underline na frente, pois iremos usar getter e setter
  // Definimos como ferramenta ou null, pois tal ferramenta pode existir ou não
  private _tools: Tools | null = null;

  constructor(private _name: string) {}

  // get criado para obter o name
  get name(): string {
    return this._name;
  }

  // Set criado para configurar qual ferramenta será usada
  set tool(tool: Tools | null) {
    this._tools = tool;
  }

  // Get para obter a ferramenta
  get tool(): Tools | null {
    return this._tools;
  }

  // Criação do metódo escrever para fazer condicional verificando se existe ferramenta setada
  write(): void {
    if (this.tool === null) {
      console.log("I can't write without a tool");
      return;
    }
    this.tool.writer();
  }
}

// Criação da classe abstrata ferramenta
export abstract class Tools {
  constructor(private _name: string) {}
  // Criação do metódo abstrato escrever
  abstract writer(): void;

  // Criação do metodo para obter o nome da ferrament aque estará sendo usada
  get name(): string {
    return this._name;
  }
}

// Criação da classe caneta que extende de ferramenta
export class Pen extends Tools {
  // Inserimos o metodo de escrita aqui, para fazer com que a caneta funcione
  writer(): void {
    console.log(`${this.name} is writing`);
  }
}

// Criação da classe maquina de escreve que extende de ferramenta
export class TypeWriter extends Tools {
  // Inserimos o metodo de escrita aqui, para fazer com que a maquina de escrever funcione
  writer(): void {
    console.log(`${this.name} is typing`);
  }
}

// Criando e armazenando escritor, ferramenta e maquina de escrever
const writer = new Writer('Leônidas');
const pen = new Pen('Compactor 007');
const typewriter = new TypeWriter('Olivetti');

console.log(writer.name);
console.log(pen.name);
console.log(typewriter.name);
