interface AnimalDePandora {
  nome: string;
  movimentar(): void;
}
interface AnimalSelvagem {
  nome: string;
  correr(): void;
}
class Turkan implements AnimalDePandora, AnimalSelvagem {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  movimentar() {
    console.log(`${this.nome} está movendo`);
  }
  correr() {
    console.log(`${this.nome} está correndo`);
  }
}

const turkan = new Turkan("Turkan");
turkan.movimentar();
turkan.correr();
