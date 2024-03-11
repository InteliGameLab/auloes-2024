import { game } from "../../main.js";

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
        this.dadosMinigame = dados.dadosMinigame;
    }


    preload() {
        // Carregamento dos recursos da cena
        this.load.image("botao", "assets/botaoMenu.png");
    }


    create() {
        // Adicionando botão de voltar ao menu
        this.botaoRetornar = this.add.image(640, 560, "botao").setScale(0.5, 0.5);
        // Reposicionando em caso de resize da tela
        this.botaoRetornar.onResize = function() {
            this.x = game.renderer.width / 2;
        }

        // Adicionando evento de clique ao botão
        this.botaoRetornar.setInteractive();
        this.botaoRetornar.on("pointerup", this.voltarAoMenu, this);

        // Dados do desempenho do jogador no minigame
        const encontrados = this.dadosMinigame.totalWallys();

        // Criando o texto de feedback
        let texto = this.add.text(game.renderer.width / 2, 216, "Parabéns! Você encontrou\ntodos os " + encontrados + " personagens!",
                        { fontFamily: 'Arial', fontSize: 52, color: '#ffffff', align: 'center' }).setOrigin(0.5, 0);

        // Reposicionando em caso de resize da tela
        texto.onResize = function() {
            this.x = game.renderer.width / 2;
        }
    }


    // Volta ao menu do jogo
    voltarAoMenu() {
        this.scene.start("Menu");
    }
}