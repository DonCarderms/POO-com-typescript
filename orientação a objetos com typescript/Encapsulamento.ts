class Avatar {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  public getNome() {
    return this.nome;
  }
  public setNome(nome: string) {
    nome.length > 0 ? (this.nome = nome) : console.log("nome Invalido");
  }
  public getIdade() {
    return this.idade;
  }
  public setIdade(idade: number) {
    idade > 0 ? (this.idade = idade) : console.log("idade Invalido");
  }
  public correr() {
    console.log(`${this.nome} correu`);
  }
  public conectar() {
    console.log(`${this.nome} conectou`);
  }
}
const sully = new Avatar("my avatar", 23);
sully.setNome("my avatar 2");
sully.setIdade(35);
console.log(sully.getIdade());
sully.correr();
sully.conectar();
