class Tulkun {
  protected nome: string;
  protected tamanho: number;

  constructor(nome: string, tamanho: number) {
    this.nome = nome;
    this.tamanho = tamanho;
  }
  getNome() {
    return this.nome;
  }
  getTamanho() {
    return this.tamanho;
  }
  setNome(nome: string) {
    this.nome = nome;
  }
  setTamanho(tamanho: number) {
    this.tamanho = tamanho;
  }
  public nadar() {
    console.log(`${this.nome} nadou`);
  }
}

class ContaBancaria {
  private saldo: number;
  private titular: string;

  constructor(saldo: number, titular: string) {
    this.saldo = saldo;
    this.titular = titular;
  }
  getSaldo() {
    return this.saldo;
  }
  getTitular() {
    return this.titular;
  }
  public depositar(valor: number) {
    valor <= 0 ? console.log("informe um valor valído") : (this.saldo += valor);
  }
  public sacar(valor: number) {
    valor > this.saldo
      ? console.log("saldo insuficiente")
      : (this.saldo -= valor);
  }
  public transferir(valor: number, conta: ContaBancaria) {
    if (valor > this.saldo) {
      console.log("saldo insuficiente");
    } else if (valor <= 0) {
      console.log("informe um valor valído");
    } else {
      this.saldo -= valor;
      conta.depositar(valor);
      console.log("transferido");
      console.log(this.comprovante(valor, conta.getTitular()));
    }
  }
  public imprimir() {
    console.log(`Saldo: ${this.saldo.toFixed(2)}`);
  }
  private comprovante(valorTransferido: number, contaReceptor: any) {
    const data = () => {
      const data = new Date();
      return {
        hora: `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
        data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
      };
    };

    return `${
      this.titular
    } acabou de fazer uma Transferência de R$${valorTransferido} para ${contaReceptor} dia ${
      data().data
    }  a ${data().hora}`;
  }
}

const conta1 = new ContaBancaria(0, "conta1");
conta1.imprimir();
conta1.depositar(3344.65);
conta1.imprimir();
conta1.sacar(251.45);
conta1.imprimir();

const conta2 = new ContaBancaria(200, "conta2");
conta1.transferir(114.56, conta2);
conta1.imprimir();
conta2.imprimir();
conta1.sacar(3450.78);
