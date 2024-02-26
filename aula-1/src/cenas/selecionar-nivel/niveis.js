export default class Nivel extends Phaser.Scene {

    constructor() {
        super({ key: "Nivel" });
    };

    preload() {
        this.load.image("fundo", "assets/Menu/menu.png");
        this.load.image("1", "assets/Menu/Levels/01.png");
        this.load.image("2", "assets/Menu/Levels/02.png")
    }

    create() {
        this.add.image(0,0, "fundo")
        .setOrigin(0)
        .setDepth(0)
        .setScale(2,1);

        let botao1 = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2,"1")
        .setDepth(1)
        .setScale(3);

        let botao2 = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100,"2")
        .setDepth(2)
        .setScale(3);


        botao1.setInteractive();
        botao2.setInteractive();

        botao1.on("pointerup", () =>{
            this.cameras.main.fadeOut(100, 0, 0, 0); // Fade out da cena atual durante 1 segundo (1000 milissegundos)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start('Nivel1'); // Inicia a próxima cena após o fade out
                this.cameras.main.fadeIn(100, 0, 0, 0); // Fade in da próxima cena durante 1 segundo (1000 milissegundos)
            });
        })

        botao2.on("pointerup", () =>{
            this.cameras.main.fadeOut(100, 0, 0, 0); // Fade out da cena atual durante 1 segundo (1000 milissegundos)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start('Nivel2'); // Inicia a próxima cena após o fade out
                this.cameras.main.fadeIn(100, 0, 0, 0); // Fade in da próxima cena durante 1 segundo (1000 milissegundos)
            });
        })
        
    }}