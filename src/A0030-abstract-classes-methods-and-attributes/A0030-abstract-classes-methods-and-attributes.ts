// Classes, metódos e atributos abstratos

// Criação de classe abstrata de um jogo como exemplo
export abstract class Character {
  // Criação de metodo abstrato de emoji, representando os personangens com icone unicode
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attacker: number,
    protected life: number,
  ) {}

  // Criação do metódo de attack que receber um character como params
  attack(character: Character): void {
    this.yell();
    character.lessLife(this.attacker);
  }

  // Criação do metódo lessLife, recebe como params powerAttack como number
  lessLife(powerAttack: number): void {
    this.life -= powerAttack;
    console.log(`${this.emoji} - ${this.name} is losing life ${this.life}`);
  }
  // Criação de metódo de grito abstrato para os personagens
  abstract yell(): void;
}

// Criação de personsagens refinados
// Com emoji mais frase de efeito do ataque
export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  yell(): void {
    console.log(this.emoji + ' - Warrior to ATTACK!');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  yell(): void {
    console.log(this.emoji + ' - Monster will devour YOU!');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

// Chamada do metódo de ataque com warrior atacando
warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);

// Chamada do metodo de ataque com o monster atacando
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
