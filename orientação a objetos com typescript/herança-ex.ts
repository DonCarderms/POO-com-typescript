import { Navi } from "./Classes";

class Metkayina extends Navi {
  recordeMergulho: number;
  constructor(
    nome: string,
    tribo: string,
    idade: number,
    recordeMergulho: number
  ) {
    super(nome, tribo, idade);
    this.recordeMergulho = recordeMergulho;
  }

  Mergulhar() {
    console.log(`${this.nome} Mergulhou ${this.recordeMergulho}`);
  }
}

const Tetkayina = new Metkayina("Metkayina", "Metkayina", 20, 45);
Tetkayina.fala();
Tetkayina.correr();
Tetkayina.conectarTrancar();
Tetkayina.Mergulhar();

class Animal {
  nome: string;
  cor: string;
  idade: number;
  constructor(nome: string, cor: string, idade: number) {
    this.nome = nome;
    this.cor = cor;
    this.idade = idade;
  }
}

class Gato extends Animal {
  constructor(nome: string, cor: string, idade: number) {
    super(nome, cor, idade);
  }

  miar() {
    console.log(`${this.nome} miau`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, cor: string, idade: number) {
    super(nome, cor, idade);
  }
  latir() {
    console.log(`${this.nome} latou`);
  }
}

const Gato1 = new Gato("gatinho doido", "laranja", 3);
Gato1.miar();
const Cachorro1 = new Cachorro("cachorro dindo", "preto", 5);
Cachorro1.latir();

class FormaGeometrica {
  altura: number;
  largura: number;
  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }
  area() {
    return this.altura * this.largura;
  }
  perimetro() {
    return 2 * (this.altura + this.largura);
  }
}

class Retangulo extends FormaGeometrica {
  constructor(altura: number, largura: number) {
    super(altura, largura);
  }
  calcularDiagonal() {
    console.log(Math.sqrt(this.altura * 2 + this.largura * 2));
  }
}

class Quadrado extends FormaGeometrica {
  constructor(altura: number, largura: number) {
    super(altura, largura);
  }
}
