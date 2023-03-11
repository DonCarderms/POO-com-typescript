class Humano {
  nome: string;
  idade: number;
  peso: number;
  altura: number;

  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }
}

class Livro {
  titulo: string;
  autor: string;
  editora: string;
  ano: number;

  constructor(titulo, autor, editora, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.ano = ano;
  }

  imprimir() {
    console.log(`
    
    Título: ${this.titulo}
    
    Autor: ${this.autor}
    
    Editora: ${this.editora}
    
    Ano: ${this.ano}
    `);
  }
}

class Circulo {
  raio: number;

  constructor(raio) {
    this.raio = raio;
  }
  area() {
    return Math.PI * this.raio * this.raio;
  }
}

class Vendedor {
  nome: string;
  salario: number;
  bonus: number;

  constructor(nome, salario, bonus) {
    this.nome = nome;
    this.salario = salario;
    this.bonus = bonus;
  }
  total() {
    return this.salario + this.bonus;
  }

  gastoMensal() {
    return this.salario * 0.1;
  }
  gastoAnual() {
    return this.salario * 12;
  }
  imprimir() {
    return `
        Nome: ${this.nome}
        Salario: ${this.total()}
        Gasto Mensal: ${this.gastoMensal()}
        Gasto Anual: ${this.gastoAnual()}`;
  }
}

class Triangulo {
  base: number;
  altura: number;

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  area() {
    return (this.base * this.altura) / 2;
  }
  perimetro() {
    return this.base + this.altura;
  }
  toString() {
    return `
        Base: ${this.base}
        Altura: ${this.altura}
        Area: ${this.area()}
        Perimetro: ${this.perimetro()}
        `;
  }
}

class Quadrado {
  lado: number;

  constructor(lado) {
    this.lado = lado;
  }
  area() {
    return this.lado * this.lado;
  }
  toString() {
    return `
        Lado: ${this.lado}
        Area: ${this.area()}
        `;
  }
}
