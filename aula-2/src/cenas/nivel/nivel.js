import { CameraMan } from "../../cameraMan/cameraMan.js";
import { OndeEstaWally } from "../../wally/ondeEstaWally.js";
import { eventosAdm } from "../../eventosAdm/eventosAdm.js"

// Classe de cena do primeiro nível!
export default class Nivel extends Phaser.Scene {
    // Contêiner de nomes encontrados
    nomesContainer;
    // Posição inicial no eixo Y para adicionar nomes encontrados ao contêiner
    nomeY = -140;
    // Minigame de onde está o Wally
    minigame;
    // Responsável por controlar a movimentação da câmera
    cameraMan;

    
    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel"
    constructor() {
        super({ key: "Nivel" });
    }


    preload() {
        // Carregamento dos recursos do nível
        this.load.image("fundo", "assets/fundo.jpg");
    }


    create() {
        // Inicialização do minigame com a imagem carregada
        this.minigame = new OndeEstaWally(this, "fundo");

        // Criação de um evento personalizado "achou" que, quando acontecer, executará a função "achouWally"
        eventosAdm.addListener("achou", this.achouWally, this);
        
        // Funções de configuração da cena
        this.configurarContainer();
        this.configurarCamera();
        this.configurarMouse();
    }


    configurarContainer() {
        // Criação do contêiner de nomes encontrados
        this.nomesContainer = this.add.container(0, 0);

        // Adicionar um retângulo como fundo do contêiner
        const fundo = this.add.rectangle(0, 0, 200, 1150, 0x333333)
            .setOrigin(1.37, 0.22); // Valores encontrados por teste para alinhamento correto do fundo

        // Adicionar o retângulo de fundo ao contêiner
        this.nomesContainer.add(fundo);

        // Configurar o contêiner para ser fixo na tela (UI)
        this.nomesContainer.setScrollFactor(0); // Segue a câmera
        this.nomesContainer.setDepth(1); // É mostrado sempre na frente dos outros elementos
    }


    configurarCamera() {
        // Configuração de limites e zoom da câmera
        this.cameras.main.setBounds(-200, 0, this.minigame.larguraImagem() + 200, this.minigame.alturaImagem(), true);
        this.cameras.main.setZoom(0.7);

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


    achouWally(wally) {
        // Posição X dos nomes
        const posX = -260;
        
        // Adiciona texto do nome de quem foi encontrado
        const textoNome = this.add.text(posX, this.nomeY, wally.nome, { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' })
            .setOrigin(0); // Definir a origem para o canto superior esquerdo
        
        // Adiciona a nomeY para o nome do próximo aparecer mais embaixo
        this.nomeY += textoNome.height + 10;

        // Adiciona o texto criado ao contêiner de nomes
        this.nomesContainer.add(textoNome);

        // Texto de feedback visual ao jogador quando encontra alguém
        const texto = cena.add.text(wally.x, wally.y, "Achou " + wally.nome + "!!!", { fontFamily: 'Arial', fontSize: 32, color: '#ffffff' });

        // Destrói o objeto para que não possa mais ser clicado para ser encontrado
        this.minigame.removerWally(wally);
        wally.destroy();

        // Destrói o texto de feedback visual após três segundos e meio (3500 milissegundos)
        setTimeout(() => texto.destroy(), 3500);
    }
}