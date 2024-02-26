export class Moto {
    nome;
    marca;
    ano;
    preco;

    constructor(nome, marca, ano, preco) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
        this.preco = preco;
    }

    acelerar() {
        console.log("Acelerando!");
    }

    parar() {
        console.log("Freios acionados!");
    }

    empinar() {
        console.log("Mandando grau!");
    }
}