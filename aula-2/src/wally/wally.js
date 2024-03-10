import { eventosAdm } from "../eventosAdm/eventosAdm.js";

export class Wally extends Phaser.GameObjects.Rectangle {
    nome;
    
    constructor(cena, nomeWally, wallyX, wallyY, largura, altura) {
        this.nome = nomeWally;

        super(cena, wallyX, wallyY, largura, altura);
        cena.add.existing(this);

        this.setInteractive();
        this.on("pointerup", () => eventosAdm.emit("achou", this), this);
    }
}