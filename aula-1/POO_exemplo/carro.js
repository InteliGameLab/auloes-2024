// Classe que serve de molde para criar um carro. A palavra "export" serve para podermos utilizá-la em outros arquivos
export class Carro {

    // Características do carro
    nome;
    marca;
    ano;
    preco;

    // Construtor da classe! Atribui os parâmetros às características do carro sendo criado
    constructor(nome, marca, ano, preco) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
        this.preco = preco;
    }

    // Imprime as características do carro no console
    mostrarDescricao() {
        console.log("Nome: "  + this.nome  +
                    "Marca: " + this.marca +
                    "Ano: "   + this.ano   +
                    "Preço: " + this.preco);
    }
}