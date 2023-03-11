class Personagem {
  conectar() {
    console.log("Conectado");
  }
}

class Humano extends Personagem {
  conectar() {
    console.log("conecta ao link");
  }
}
class Navi extends Personagem {
  conectar() {
    console.log("conecta a natureza selvagem de Pandora.");
  }
}

const humano = new Humano();
const navi = new Navi();

const personagems: Personagem[] = [humano, navi];

personagems.map((personagem) => personagem.conectar());

class Veiculo {
  movimentar() {
    console.log("Movimentando");
  }
}
class Aviao extends Veiculo {
  movimentar() {
    console.log("avião Movimentando");
  }
}
class Carro extends Veiculo {
  movimentar() {
    console.log("carro movimentando");
  }
}
class Barco extends Veiculo {
  movimentar() {
    console.log("barco movimentando");
  }
}

const veiculos: Veiculo[] = [new Aviao(), new Carro(), new Barco()];

veiculos.map((veiculo) => veiculo.movimentar());
