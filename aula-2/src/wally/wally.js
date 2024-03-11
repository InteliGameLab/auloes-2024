import { eventosAdm } from "../eventosAdm/eventosAdm.js";

// Classe que representa um personagem a ser encontrado no minigame Onde Está Wally
export class Wally extends Phaser.GameObjects.Rectangle {
    // Nome do personagem
    nome;
    

    constructor(cena, nomeWally, wallyX, wallyY, largura, altura) {
        // Criando um retângulo que, quando clicado, confirma que o jogador achou o personagem
        super(cena, wallyX, wallyY, largura, altura);

        this.nome = nomeWally;
        // this.setFillStyle(0x0000ff);
        // this.setAlpha(0.4);
        
        // Adicionando o retângulo à cena
        cena.add.existing(this);

        // Permite cliques no retângulo
        this.setInteractive();
        
        // Configura o evento de clique no retângulo
        this.on("pointerup", () => eventosAdm.emit("achou", this), this);
    }
}