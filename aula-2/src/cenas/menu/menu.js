export default class Menu extends Phaser.Scene {
    // Botão para iniciar a próxima cena
    botaoIniciar;


    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Menu"
    constructor() {
        super({ key: "Menu" });
    }


    preload() {
        // Carregamento dos recursos da cena
        this.load.image("menu", "assets/menu.png");
        this.load.image("botaoMenu", "assets/botaoMenu.png");
    }


    create() {
        // Adicionando background
        this.add.image(0, 0, "menu").setOrigin(0);

        // Adicionando botão de iniciar a próxima cena
        this.botaoIniciar = this.add.image(100, 200, "botaoMenu");
        // Adicionando evento de clique ao botão
        this.botaoIniciar.setInteractive();
        this.botaoIniciar.on("pointerup", this.comecarProximaCena, this);

        // Adicionando texto de título
        this.add.text(100, 100, "Onde Está Wally?", { fontFamily: 'Arial', fontSize: 50, color: '#ffffff' });
    }


    // Começa a próxima cena
    comecarProximaCena() {
        this.scene.start("Nivel1");
    }
}