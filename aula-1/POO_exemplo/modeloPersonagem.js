// Classe que cria o modelo que os personagens devem seguir
export class ModeloPersonagem {
    // Características de um personagem
    nome;
    sprite;
    frase;

    // Construtor da classe! Ele cria as características do personagem sendo criado
    // constructor (nome, sprite, frase) {
    //     this.nome = nome;
    //     this.sprite = sprite;
    //     this.frase = frase;
    // }

    // Ação que mostra as características do personagem
    mostrarDescricao() {
        console.log('Nome: ' + this.nome);
        console.log('Sprite: ' + this.sprite);
        console.log('Falar: ' + this.frase);
    
    }
}




















