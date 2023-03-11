class Humano {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  utilizarLink() {
    console.log(`${this.nome} virou  avatar`);
  }
}

const sully = new Humano("sully", 23);
sully.utilizarLink();

abstract class AnimalDePandora {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  abstract movimentar();
}

class Pandora extends AnimalDePandora {
  movimentar() {
    console.log(`${this.nome} está movendo`);
  }
}

class Tulkun extends AnimalDePandora {
  movimentar() {
    console.log(`${this.nome} está nadando`);
  }
}
// const pandora = new Pandora("pandora");
// pandora.movimentar();
// // const tulkun = new Tulkun("tulkun");
// // tulkun.movimentar();
