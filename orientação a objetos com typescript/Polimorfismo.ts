class AnimalDePandora {
  movimentar() {
    console.log("Animal movimentando");
  }
  emitirSon() {
    console.log("Animal emitindo son");
  }
}

class Ikran extends AnimalDePandora {
  emitirSon() {
    console.log("Iran emitindo son");
  }
  movimentar() {
    console.log("Iran movimentando");
  }
}

class Turkin extends AnimalDePandora {
  emitirSon() {
    console.log("Turkin emitindo son");
  }
  movimentar() {
    console.log("Turkin movimentando");
  }
}

const ikran = new Ikran();
const turki = new Turkin();

const animais: AnimalDePandora[] = [ikran, turki];

animais.map((animal) => animal.emitirSon());
