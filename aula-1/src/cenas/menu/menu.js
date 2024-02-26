import { carregarSpritesPersonagem, criarAnimacoesPersonagem } from "../../personagem/personagem.js";

export default class Menu extends Phaser.Scene {

    constructor() {
        super({ key: "Menu" });
    };

    preload() {
        this.load.image("fundo", "assets/Menu/menu.png");
        this.load.image("jogar", "assets/Menu/Buttons/Play.png");
        this.load.image("nivel", "assets/Menu/Buttons/Levels.png");

        carregarSpritesPersonagem(this);
    }

    create() {
        criarAnimacoesPersonagem(this);

        this.add.image(0,0, "fundo")
        .setOrigin(0)
        .setScale(2,1);

        this.add.text(this.game.renderer.width / 2 - 170, this.game.renderer.height * 0.20, 'Sapo e abacaxi',
         { fontFamily: 'Roboto', fontSize: '64px', fill: '#000000' })


        let botaoJogar = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2, "jogar")
        .setScale(3);

        let botaoNivel = this.add
        .image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "nivel")
        .setScale(3);


        botaoJogar.setInteractive();
        botaoNivel.setInteractive();

        botaoJogar.on("pointerup", () =>{
            this.cameras.main.fadeOut(1000, 0, 0, 0); // Fade out da cena atual durante 1 segundo (1000 milissegundos)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start('Nivel1'); // Inicia a próxima cena após o fade out
                this.cameras.main.fadeIn(1000, 0, 0, 0); // Fade in da próxima cena durante 1 segundo (1000 milissegundos)
            });
        })

        botaoNivel.on("pointerup", () =>{
            this.cameras.main.fadeOut(1000, 0, 0, 0); // Fade out da cena atual durante 1 segundo (1000 milissegundos)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.scene.start('SelecionaNivel'); // Inicia a próxima cena após o fade out
            });
        })
        
    }}