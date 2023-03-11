export class Navi {
  /*É possível criar classes sem construtor e ainda assim não
   *receber mensagens de erro. Basta definir os atributos ao
   *declará-los, da seguinte forma:

                    nome: string = "pulo";
                    tribo: string = "uuuds";
                    iadade: number = 45;
   */

  nome: string;
  tribo: string;
  idade: number;

  constructor(nome: string, tribo: string, idade: number) {
    this.nome = nome;
    this.tribo = tribo;
    this.idade = idade;
  }

  fala() {
    console.log(`${this.nome} falou`);
  }
  correr() {
    console.log(`${this.nome} correu`);
  }
  conectarTrancar() {
    console.log(`${this.nome} conectou`);
  }
}

const paulo = new Navi("paulo", "pulo", 34);
paulo.fala();
console.log(paulo.nome);
