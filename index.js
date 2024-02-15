class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let descricaoAtaque;
    switch (this.tipo) {
      case 'mago':
        descricaoAtaque = 'usou magia';
        break;
      case 'guerreiro':
        descricaoAtaque = 'usou espada';
        break;
      case 'monge':
        descricaoAtaque = 'usou artes marciais';
        break;
      case 'ninja':
        descricaoAtaque = 'usou shuriken';
        break;
      default:
        descricaoAtaque = 'fez um ataque desconhecido';
    }

    console.log(`${this.tipo} atacou usando ${descricaoAtaque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi('Aragorn', 87, 'guerreiro');
heroi1.atacar();

const heroi2 = new Heroi('Gandalf', 2019, 'mago');
heroi2.atacar();

const heroi3 = new Heroi('Lee Sin', 30, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Hattori Hanzo', 35, 'ninja');
heroi4.atacar();
