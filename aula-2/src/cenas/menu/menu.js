export default class Menu extends Phaser.Scene {
    // Botão para iniciar a próxima cena
    botaoIniciar;


    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Menu"
    constructor() {
        super({ key: "Menu" });
    }


    preload() {
        // Carregamento dos recursos da cena
        this.load.image("menu", "assets/fundo.png");
        this.load.image("botaoMenu", "assets/botaoJogar.png");
        this.load.image("Logo", "assets/Logo.png");
    }


    create() {
        // Adicionando background
        this.add.image(0, 0, "menu").setOrigin(0)
        .setScale(3,3);

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.30, "Logo")
        .setScale(0.7, 0.7);

        // Adicionando botão de iniciar a próxima cena
        this.botaoIniciar = this.add.image(640, 560, "botaoMenu")
        .setScale(0.5, 0.5);
        // Adicionando evento de clique ao botão
        this.botaoIniciar.setInteractive();
        this.botaoIniciar.on("pointerup", this.comecarProximaCena, this);

        // Adicionando texto de título
       // this.add.text(100, 100, "Onde Está Wally?", { fontFamily: 'Arial', fontSize: 50, color: '#ffffff' });
    }


    // Começa a próxima cena
    comecarProximaCena() {
        this.scene.start("Nivel1");
    }
}