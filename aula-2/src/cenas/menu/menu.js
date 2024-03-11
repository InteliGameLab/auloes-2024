import { game } from "../../main.js";

export default class Menu extends Phaser.Scene {
    // Botão para iniciar a próxima cena
    botaoIniciar;


    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Menu"
    constructor() {
        super({ key: "Menu" });
    }


    preload() {
        // Carregamento dos recursos da cena
        this.load.image("botaoMenu", "assets/botaoJogar.png");
        this.load.image("Logo", "assets/Logo.png");
    }


    create() {
        let logo = this.add.image(this.game.renderer.width / 2, 216, "Logo").setScale(0.7, 0.7);
        // Reposicionando em caso de resize da tela
        logo.onResize = function() {
            this.x = game.renderer.width / 2;
        }

        // Adicionando botão de iniciar a próxima cena
        this.botaoIniciar = this.add.image(this.game.renderer.width / 2, 560, "botaoMenu").setScale(0.5, 0.5);
        // Reposicionando em caso de resize da tela
        this.botaoIniciar.onResize = function() {
            this.x = game.renderer.width / 2;
        }
        // Adicionando evento de clique ao botão
        this.botaoIniciar.setInteractive();
        this.botaoIniciar.on("pointerup", this.comecarProximaCena, this);

    }


    // Começa a próxima cena
    comecarProximaCena() {
        this.scene.start("Nivel1");
    }
}