import { Navi } from "./Classes";

class Omaticaya extends Navi {
  velocidadeNaCorrea: number;
  constructor(
    nome: string,
    tribo: string,
    idade: number,
    velocidadeNaCorrea: number
  ) {
    super(nome, tribo, idade);
    this.velocidadeNaCorrea = velocidadeNaCorrea;
  }
  escalar() {
    console.log(`${this.nome} escalou`);
  }
}

const Omatica = new Omaticaya("Otávio", "omaticaya", 20, 67);

Omatica.correr();
Omatica.escalar();
Omatica.conectarTrancar();
