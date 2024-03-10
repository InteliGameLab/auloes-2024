export class Wally extends Phaser.GameObjects.Rectangle {
    nome;
    emissor;
    
    constructor(cena, nomeWally, wallyX, wallyY, largura, altura) {
        this.emissor = new Phaser.Events.EventEmitter();
        this.emissor.addListener("clicou", this.achouWally, this);

        this.nome = nomeWally;

        super(cena, wallyX, wallyY, largura, altura);
        cena.add.existing(this);

        this.setInteractive();
        this.on("pointerup", () => this.emissor.emit("clicou", cena));
    }


    achouWally(cena) {
        let texto = cena.add.text(this.x, this.y, "Achou " + this.nome + "!!!");
        setTimeout(() => texto.destroy(), 3500);
    }
}