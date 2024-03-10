// Classe de cena do fim de jogo
export default class Final extends Phaser.Scene {
    // Botão para retornar ao menu
    botaoRetornar;
    // Dados sobre o minigame jogado
    dadosMinigame;


    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Final"
    constructor() {
        super({ key: "Final" });
    }


    // Função executada ao iniciar a cena e que recebe os dados passados pela cena anterior
    init(dados) {
        this.dadosMinigame = dados;
    }


    preload() {
        // Carregamento dos recursos da cena
        this.load.image("fundo", "assets/fundo.png");
        this.load.image("botao", "assets/botao.png");
    }


    create() {
        // Adicionando background
        this.add.image(0, 0, "fundo").setOrigin(0);

        // Adicionando botão de voltar ao menu
        this.botaoRetornar = this.add.image(100, 200, "botao");
        // Adicionando evento de clique ao botão
        this.botaoRetornar.setInteractive();
        this.botaoRetornar.on("pointerup", this.voltarAoMenu, this);

        // Dados do desempenho do jogador no minigame
        const encontrados = this.dadosMinigame.wallysEncontrados();
        const restantes = this.dadosMinigame.wallysRestantes();

        // Criando o texto de feedback
        if (restantes > 0) {
            this.add.text(100, 100, "Parabéns! Você encontrou " + encontrados + " personagens!\nFaltaram apenas " + restantes + ".",
                        { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        }
        else {
            this.add.text(100, 100, "Parabéns! Você encontrou todos os " + encontrados + " personagens!",
                        { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        }
    }


    // Volta ao menu do jogo
    voltarAoMenu() {
        this.scene.start("Menu");
    }
}