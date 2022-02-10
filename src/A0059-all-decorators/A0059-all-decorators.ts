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
  console.log('PARAMETER OF STATIC METHOD');
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
  console.log('PROPERTY DECORATOR');
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
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

// Propriedade estática
function decoratorOfStaticProperties(
  classConstructor: any,
  propertyName: string,
): any {
  // Chamado na criação da propriedade estática
  console.log('DECORATOR OF STATIC PROPERTY');
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
  console.log('GETTER/SETTER static');
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
export class Person {
  @decoratorOfProperty
  name: string;
  lastname: string;
  age: number;

  @decoratorOfStaticProperties
  static staticProperty = 'PROPERTY STATIC VALUE';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decoratorOfMethod
  method(@decoratorOfParameterOfMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @staticDecorator
  static staticMethod(@decoratorOfParameterOfStaticMethod msg: string): string {
    return Person.staticProperty + ' - ' + msg;
  }

  get nomeCompleto(): string {
    return this.name + ' ' + this.lastname;
  }

  @decoratorOfGetterAndSetterNormal
  set fullName(valor: string) {
    const words = valor.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @decoratorOfGetterAndSetterStatic
  static get staticPropertyGetterSetter(): string {
    return Person.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    Person.staticProperty = value;
  }
}

// Uso da classe

const pessoa = new Person('Leônidas', 'Junior', 30);
pessoa.fullName = 'Leônidas Santos Bandeira Junior';
const metodo = pessoa.method('Hello World!');
const metodoEstatico = Person.staticMethod('Hello World!');
console.log(pessoa);
console.log(metodo);
console.log(metodoEstatico);
console.log(Person.staticProperty);
