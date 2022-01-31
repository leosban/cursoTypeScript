// Type alias -> Criar apelido pra um tipo, deixar o código limpo
// usamos a palvra type, para criar o 'alias'

type age = number;
type Person = {
  name: string;
  age: age; // Atribuimos um tipo com 'alias' dentro de outro tipo
  salary: number;
  favoriteColor?: string;
};

type RGBColors = 'red' | 'green' | 'blue';
type CMYKColors = 'cyan' | 'magent' | 'yellow' | 'black';

// Usamos union type, para unir os tipos de cores, para refinar o código
type favoriteColor = RGBColors | CMYKColors;

// Construimos nosso objeto e inferimos que ele será do tipo 'person'
// ou seja, contem o tipo de chave/valor que tínhamos definido antes
// que foi o tipo definido anteriormente
const person: Person = {
  name: 'Leônidas',
  age: 32,
  // Numeros com muitas casas repetidas, podemos separar com underline
  // o TypeScript irá entender, facilitando a leitura
  salary: 10_000,
};

// Função que retorna a cor favorita, difinindo os parametros que foram
// 'tipados' anteriomente
export function setFavoriteColor(person: Person, color: favoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'magent'));
