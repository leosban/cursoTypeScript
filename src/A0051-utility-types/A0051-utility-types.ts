/* eslint-disable @typescript-eslint/no-unused-vars */
// Tipos genéricos padrões que existem no TypeScript

// Record -> representa qual o tipo da chaves e dos valores
const objectOne: Record<string, string | number> = {
  name: 'Leônidas',
  lastname: 'Junior',
  age: 32,
};
// Impressão do objectOne
console.log(objectOne);

// Exemplo de um tipo de pessoa
type ProtocolPerson = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Criação de um novo tipo baseado em ProtocolPerson
// Required: Faz com que as propriedades em <T> sejam requeridas
type PersonRequired = Required<ProtocolPerson>;

//Partial: Faz com que as propriedades em <T> sejam opcionais
type PersonPartial = Partial<PersonRequired>;

// Readonly:Faz com que as propriedades em <T> sejam somente leitura
type PersonReadonly = Readonly<PersonRequired>;

// Pick: Faz com que escolhemos as propriedades em <T> que vamos usar
type PersonPick = Pick<PersonRequired, 'name' | 'lastname'>;

// Extract: computa o que está no primeiro type e pode ser atribuido no segundo type
// Exclude: computa o que não estiver repetido no resultado
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type Exclusion = Exclude<ABC, CDE>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Extraction = Extract<ABC, CDE>;

// Usando o tipo ProtocolPerson
const objectTwo: PersonRequired = {
  name: 'Junior',
  lastname: 'Bandeira',
  age: 30,
};

console.log();

// Exemplo de um cenário real dos types usados acima
type AccountMongo = {
  _id: string;
  name: string;
  lastname: string;
  age: number;
};

// Migrar o '_id' para 'id' mapeando o tipo AccountMongo para AccountApi
// Usando Pick<> para pegar os dados, depois Exclude<> para remover o '_id'
// em seguida intersection para inserir somente 'id'
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

// Ex de dados vindo do BD Mongo
const accountMongo: AccountMongo = {
  _id: '001',
  name: 'Leônidas',
  age: 32,
  lastname: 'Junior',
};

// Função que irá fazer o mapeamento para remover o underline do id
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

// Uso da função que faz o mapeamento
const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
