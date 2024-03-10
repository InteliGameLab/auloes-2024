import { CameraMan } from "../../cameraMan/cameraMan.js";
import { OndeEstaWally } from "../../wally/ondeEstaWally.js";
import { eventosAdm } from "../../eventosAdm/eventosAdm.js"

// Classe de cena do primeiro nível!
export default class Nivel1 extends Phaser.Scene {
    // Minigame de onde está o Wally
    minigame;
    // Responsável por controlar a movimentação da câmera
    cameraMan;

    
    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel"
    constructor() {
        super({ key: "Nivel1" });
    }


    preload() {
        // Carregamento dos recursos do nível
        this.load.image("nivel1", "assets/nivel1.jpg");
    }


    create() {
        // Inicialização do minigame com a imagem carregada
        this.minigame = new OndeEstaWally(this, "nivel1");

        // Criação de um evento personalizado "achou" que, quando acontecer, executará a função "achouWally"
        eventosAdm.addListener("achou", this.achouWally, this);
        
        // Rodando a cena de UI
        this.scene.run("UI");

        // Funções de configuração da cena
        this.configurarCamera();
        this.configurarMouse();

        // Adicionando personagens a serem encontrados
        this.adicionarWallys();
    }


    configurarCamera() {
        // Configuração de limites e zoom da câmera
        this.cameras.main.setBounds(-200, 0, this.minigame.larguraImagem() + 200, this.minigame.alturaImagem(), false);
        this.cameras.main.setZoom(0.5);

        // Inicializando o controlador da câmera
        this.cameraMan = new CameraMan(this.cameras.main, this.input.mousePointer);
    }

     
    configurarMouse() {
        // Desativa a interação do navegador com o botão direito do mouse
        this.input.mouse.disableContextMenu();

        // Evento para registrar a posição do mouse
        this.input.on('pointerdown', () => eventosAdm.emit("clicou"), this);

        // Evento para mover a câmera quando o mouse é arrastado (movido enquanto se está clicando)
        this.input.on('pointermove', () => eventosAdm.emit("moveu"), this);
    }


    // Adiciona personagens a serem encontrados
    adicionarWallys() {
        this.minigame.adicionarWally(this, "Madonna", 100, 100, 100, 100, 0x00FF00);
    }


    achouWally(wally) {
        // Armazena um vetor bidimensional com a posição central abaixo do Wally
        const abaixoDoWally = wally.getBottomCenter();

        // Texto de feedback visual ao jogador quando encontra alguém
        const texto = this.add.text(abaixoDoWally.x, abaixoDoWally.y, "Achou " + wally.nome + "!!!", { fontFamily: 'Arial', fontSize: 32, color: '#00000' });

        // Ganha se encontrar o Wally real
        if (wally.nome === "Wally") {
            this.ganhar();
        }

        else {
            // Destrói o texto de feedback visual após três segundos e meio (3500 milissegundos)
            setTimeout(() => texto.destroy(), 3500);

            // Remove o objeto para que não possa mais ser clicado para ser encontrado
            this.minigame.removerWally(wally);
        }
    }


    // Transiciona para a próxima cena
    ganhar() {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this);
    }


    // Começa a próxima cena, passando os dados atuais do minigame
    comecarProximaCena() {
        this.scene.start("Final", { dadosMinigame : this.minigame });
    }
}