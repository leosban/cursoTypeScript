// Uso da tipagem estruturada
// A identidade do tipo, não importa tanto quanto as restrições do tipo

// Tipagem da função
type VerifyUserFn = (user: User, sentValue: User) => boolean;
// Tipagem do user
type User = { username: string; password: string };

// Criação da função tipada
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// Uso da função
// Usuário no BD
const bdUser = { username: 'Leônidas', password: '123456' };
// Usaário enviando dados
const sentUser = { username: 'Leônidas', password: '123456' };
// Uso da função para verificar se o usuário poderá logar na app
const loggedIn = verifyUser(bdUser, sentUser);
// Impressão como true, pois os objetos são iguais, portanto os dados
// perterncem ao mesmo usuário'
console.log(loggedIn);
