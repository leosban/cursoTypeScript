// Tipo de opções de votação
type VotatioOption = {
  numberOfVotes: number;
  option: string;
};

// Estrutura de dados da votação
export class Votation {
  // Atributo privado de opções de votação que iniciará com um array vazio
  private _votationOptions: VotatioOption[] = [];
  // Pegando os detalhes da Votation no próprio construtor
  constructor(public details: string) {}

  // Metodo para adicionar opções de votação
  addVotationOptions(votatioOption: VotatioOption): void {
    this._votationOptions.push(votatioOption);
  }

  // Metodo para criar voto
  vote(votationIndex: number): void {
    // Condicional para verificar se a votação existe para votar ou não
    // caso a votação não existe, não vai retornar nada
    if (!this._votationOptions[votationIndex]) return;

    // Computando a votação
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  // Metodo get para pegar os valores do atributo privado '_votationOptions'
  get votationOption(): VotatioOption[] {
    return this._votationOptions;
  }
}

// Classe que vai ser votation app
export class VotationApp {
  // Atributo que vai receber as votações
  private votations: Votation[] = [];
  // Sem construtor, pois não vamos receber nada nele

  // Metodo para adicionar as votações
  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  // Metodo para mostrar as votações
  showVotations(): void {
    // For of para iterar sobre as votações
    for (const votation of this.votations) {
      // Impressão dos detalhes da votação a serem exibidos
      console.log(votation.details);
      // For para iterar sobre a opções de votação
      for (const votationOption of votation.votationOption) {
        // Impressão do número de voto e opções
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      // Para separar as votações
      console.log('########');
      console.log('');
    }
  }
}

// Criando as votações
const votationOne = new Votation('What is your favorite programming language?');
// Opções de votação
votationOne.addVotationOptions({ option: 'JavaScript', numberOfVotes: 0 });
votationOne.addVotationOptions({ option: 'Python', numberOfVotes: 0 });
votationOne.addVotationOptions({ option: 'TypeScript', numberOfVotes: 0 });
votationOne.addVotationOptions({ option: 'Java', numberOfVotes: 0 });

// Votando ataravés dos indices
votationOne.vote(1);
votationOne.vote(1);
votationOne.vote(0);
votationOne.vote(0);
votationOne.vote(0);
votationOne.vote(2);
votationOne.vote(2);
votationOne.vote(3);

// Instanciando a classe de votationApp
const votationApp = new VotationApp();
votationApp.addVotation(votationOne);

// Metódo para mostrar as votações
votationApp.showVotations();
