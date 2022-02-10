// Tipo de construtor da classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoratorOfClasses(constructor: Constructor): any {
  // Chamada na criação das classes
  console.log('Class');
  console.log(constructor);
  console.log('########');
}

// Metódo de instância
function decoratorOfMethod(
  classPropertype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamada na criação do metódo (não é necessário chamar o metódo)
  console.log('Normal method');
  console.log(classPropertype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('#######');
}

// Metodo estático
function staticDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamada na criação do metódo (não é necessário chamar o metódo)
  console.log('Static Method');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('########');
}

// Parametro de metodo
function decoratorOfParameterOfMethod(
  classProperty: any,
  methodName: string,
  propertyIndex: number,
): any {
  // Chamada na criação do metódo
  console.log('Method of parameter');
  console.log(classProperty);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('########');
}

// Parâmetro de método estático
function decoratorOfParameterOfStaticMethod(
  classConstructor: Constructor,
  methodName: string,
  propertyIndex: number,
): any {
  // Chamado na criação do parâmetro (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('########');

  // Retorno é ignorado
}

// Propriedade
decoratorOfProperty;
function decoratorOfProperty(classProperty: any, propertyName: string): any {
  // Chamado na criação da propriedade
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(classProperty);
  console.log(propertyName);
  console.log('########');

  // Retorno pode ser omitido
  // Use get e set para manipular o valor da propriedade
  let propertyValue: any;
  return {
    enumerable: true,
    configurable: true,
    get: () => propertyValue,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        propertyValue = valor.split('').reverse().join('');
        return;
      }
      propertyValue = valor;
    },
  };
}

// Propriedade estática
function decoratorOfStaticProperties(
  classConstructor: any,
  propertyName: string,
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('########');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter
function decoratorOfGetterAndSetterNormal(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER normal');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('########');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// Getter/Setter estático
function decoratorOfGetterAndSetterStatic(
  classConstructor: Constructor,
  propertyName: string,
  PropertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método
  // (só pode ser aplicado no getter ou no setter - não em ambos)
  console.log('GETTER/SETTER estático');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(PropertyDescriptor);
  console.log('########');

  // Retorno pode ser omitido
  return {
    // Use get/set OU value
    enumerable: true,
    configurable: true,
  };
}

// A classe e o uso dos decorators

@decoratorOfClasses
export class UmaPessoa {
  @decoratorOfProperty
  nome: string;
  sobrenome: string;
  idade: number;

  @decoratorOfStaticProperties
  static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoratorOfMethod
  metodo(@decoratorOfParameterOfMethod msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  @staticDecorator
  static metodoEstatico(
    @decoratorOfParameterOfStaticMethod msg: string,
  ): string {
    return UmaPessoa.propriedadeEstatica + ' - ' + msg;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  @decoratorOfGetterAndSetterNormal
  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }

  @decoratorOfGetterAndSetterStatic
  static get staticPropertyGetterSetter(): string {
    return UmaPessoa.propriedadeEstatica;
  }

  static set staticPropertyGetterSetter(value: string) {
    UmaPessoa.propriedadeEstatica = value;
  }
}

// Uso da classe

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
pessoa.nomeCompleto = 'João Silva Oliveira';
const metodo = pessoa.metodo('Olá mundo!');
const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(UmaPessoa.propriedadeEstatica);
