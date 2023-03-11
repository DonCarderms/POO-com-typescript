interface Animals {
  emitirSom(): void;
  locomover(): void;
}

class Cachorro implements Animals {
  emitirSom() {
    console.log("Au au");
  }
  locomover() {
    console.log("cachorro movendo");
  }
}

const cachorro = new Cachorro();
cachorro.emitirSom();
cachorro.locomover();

class Gato implements Animals {
  emitirSom() {
    console.log("miau miau!!!");
  }
  locomover() {
    console.log("gato movendo");
  }
}

const gato = new Gato();
gato.emitirSom();
gato.locomover();

abstract class Personagem {
  abstract conectar(): void;
}

class Humano extends Personagem {
  conectar() {
    console.log("Humano conectado");
  }
}

const humano = new Humano();
humano.conectar();

class Navi extends Personagem {
  conectar() {
    console.log("Navi conectado");
  }
}

const navi = new Navi();
navi.conectar();

abstract class Funcionario {
  abstract exercerFuncao(): void;
}

class Gerente extends Funcionario {
  exercerFuncao() {
    console.log("Gerente exercindo");
  }
}

const gerente = new Gerente();
gerente.exercerFuncao();

class TeachLead extends Funcionario {
  exercerFuncao() {
    console.log("TeachLead ensinando a programar");
  }
}

const teachLead = new TeachLead();
teachLead.exercerFuncao();

class FrontEnd extends Funcionario {
  exercerFuncao() {
    console.log("FrontEnd construindo interface do usuário");
  }
}

const frontEnd = new FrontEnd();
frontEnd.exercerFuncao();

class BackEnd extends Funcionario {
  exercerFuncao() {
    console.log("BackEnd construindo a lógica do negócio");
  }
}

const backEnd = new BackEnd();
backEnd.exercerFuncao();
