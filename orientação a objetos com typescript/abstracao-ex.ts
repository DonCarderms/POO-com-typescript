abstract class Ikran {
  abstract montar(): void;
}

abstract class Carro {
  abstract ligar(): void;
  abstract desligar(): void;
  abstract acelerar(): void;
  abstract frear(): void;
  abstract indicarVelocidade(): void;
}
abstract class Televisao {
  marca: string;
  canalAtual: string;
  volumeAtual: number;
  constructor(marca: string, canalAtual: string) {
    this.marca = marca;
    this.canalAtual = canalAtual;
    this.volumeAtual = 0;
  }
  abstract ligar(): void;
  abstract desligar(): void;
  abstract mudarDeCanal(): void;
}

abstract class AnimalDePandora {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  abstract movimentar(): void;
  abstract emitirSon(): void;
}
abstract class FormaGeometrica {
  altura: number;
  largura: number;
  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }
  abstract calcularArea(): void;
  abstract CalcularPerimetro(): void;
}
class Rectangulo extends FormaGeometrica {
  constructor(altura: number, largura: number) {
    super(altura, largura);
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea() {
    return this.altura * this.largura;
  }
  CalcularPerimetro() {
    return 2 * (this.altura + this.largura);
  }
}
class Circulo extends FormaGeometrica {
  radio: number;
  constructor(altura: number, largura: number, radio: number) {
    super(altura, largura);
    this.altura = altura;
    this.largura = largura;
    this.radio = radio;
  }
  calcularArea() {
    return this.altura * this.largura;
  }
  CalcularPerimetro() {
    return 2 * (this.altura + this.largura);
  }
}
abstract class Pessoa {
  abstract cumprimentar(): void;
}
class PessoaDoBrasil extends Pessoa {
  cumprimentar() {
    console.log("e aí beleza");
  }
}
class PessoaDosUsa extends Pessoa {
  cumprimentar() {
    console.log("how are you big");
  }
}

class PessoaDoHaiti extends Pessoa {
  cumprimentar() {
    console.log("yow sakap fèt la");
  }
}
