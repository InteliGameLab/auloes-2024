import { CameraMan } from "../../cameraMan/cameraMan.js";
import { OndeEstaWally } from "../../wally/ondeEstaWally.js";
import { eventosAdm } from "../../eventosAdm/eventosAdm.js"

// Classe de cena do primeiro nível!
export default class Nivel1 extends Phaser.Scene {
    // Minigame de onde está o Wally
    minigame;
    // Responsável por controlar a movimentação da câmera
    cameraMan;

    artistas = {
        "Prince": {
            nome: "Prince",
            posx: 180,
            posy: 150,
            largura: 100,
            altura: 225,
        },
        "Adele": {
            nome: "Adele",
            posx: 950,
            posy: 980,
            largura: 100,
            altura: 200,
        },
        "Freddy Mercury": {
            nome: "Freddy Mercury",
            posx: 2250,
            posy: 250,
            largura: 100,
            altura: 200,
        },
        "Gorillaz": {
            nome: "Gorillaz",
            posx: 3000,
            posy: 600,
            largura: 200,
            altura: 150,
        },
        "David Bowie": {
            nome: "David Bowie",
            posx: 3100,
            posy: 250,
            largura: 100,
            altura: 200,
        },
        "Amy Winehouse": {
            nome: "Amy Winehouse",
            posx: 2000,
            posy: 400,
            largura: 100,
            altura: 220,
        },
        "Daft Punk": {
            nome: "Daft Punk",
            posx: 3750,
            posy: 1300,
            largura: 100,
            altura: 100,
        },
        "Elton John": {
            nome: "Elton John",
            posx: 1100,
            posy: 2060,
            largura: 100,
            altura: 230,
        },
    };
    
    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel"
    constructor() {
        super({ key: "Nivel1" });
    }


    preload() {
        // Carregamento dos recursos do nível
        this.load.image("nivel1", "assets/nivel1.jpg");
        // Rodando a cena de UI
        this.scene.run("UI");
    }


    create() {
        // Inicialização do minigame com a imagem carregada
        this.minigame = new OndeEstaWally(this, "nivel1");

        // Criação de um evento personalizado "achou" que, quando acontecer, executará a função "achouWally"
        eventosAdm.addListener("achou", this.achouWally, this);

        // Funções de configuração da cena
        this.configurarCamera();
        this.configurarMouse();

        // Adicionando personagens a serem encontrados
        this.adicionarWallys();
    }


    configurarCamera() {
        // Configuração de limites e zoom da câmera
        this.cameras.main.setBounds(-400, 0, this.minigame.larguraImagem() + 400, this.minigame.alturaImagem(), false);
        this.cameras.main.setZoom(0.5);

        // Inicializando o controlador da câmera
        this.cameraMan = new CameraMan(this.cameras.main, this.input.mousePointer);
    }

     
    configurarMouse() {
        // Evento para registrar a posição do mouse
        this.input.on('pointerdown', () => eventosAdm.emit("clicou"), this);

        // Evento para mover a câmera quando o mouse é arrastado (movido enquanto se está clicando)
        this.input.on('pointermove', () => eventosAdm.emit("moveu"), this);
    }


    // Adiciona personagens a serem encontrados
    adicionarWallys() { 
        // "Prince", "Adele", "Daft Punk", "Gorillaz", "David Bowie", "Amy Winehouse", "Freddy Mercury", "Elton John"
        this.minigame.adicionarWally(this, this.artistas.Prince.nome, this.artistas.Prince.posx, this.artistas.Prince.posy, this.artistas.Prince.largura, this.artistas.Prince.altura);
        this.minigame.adicionarWally(this, this.artistas.Adele.nome, this.artistas.Adele.posx, this.artistas.Adele.posy, this.artistas.Adele.largura, this.artistas.Adele.altura);
        this.minigame.adicionarWally(this, this.artistas["Daft Punk"].nome, this.artistas["Daft Punk"].posx, this.artistas["Daft Punk"].posy, this.artistas["Daft Punk"].largura, this.artistas["Daft Punk"].altura);
        this.minigame.adicionarWally(this, this.artistas.Gorillaz.nome, this.artistas.Gorillaz.posx, this.artistas.Gorillaz.posy, this.artistas.Gorillaz.largura, this.artistas.Gorillaz.altura);
        this.minigame.adicionarWally(this, this.artistas["David Bowie"].nome, this.artistas["David Bowie"].posx, this.artistas["David Bowie"].posy, this.artistas["David Bowie"].largura, this.artistas["David Bowie"].altura);
        this.minigame.adicionarWally(this, this.artistas["Amy Winehouse"].nome, this.artistas["Amy Winehouse"].posx, this.artistas["Amy Winehouse"].posy, this.artistas["Amy Winehouse"].largura, this.artistas["Amy Winehouse"].altura);
        this.minigame.adicionarWally(this, this.artistas["Freddy Mercury"].nome, this.artistas["Freddy Mercury"].posx, this.artistas["Freddy Mercury"].posy, this.artistas["Freddy Mercury"].largura, this.artistas["Freddy Mercury"].altura);
        this.minigame.adicionarWally(this, this.artistas["Elton John"].nome, this.artistas["Elton John"].posx, this.artistas["Elton John"].posy, this.artistas["Elton John"].largura, this.artistas["Elton John"].altura);
    }


    achouWally(wally) {
        // Armazena um vetor bidimensional com a posição central abaixo do Wally
        const abaixoDoWally = wally.getBottomCenter();

        // Texto de feedback visual ao jogador quando encontra alguém
        const texto = this.add.text(abaixoDoWally.x, abaixoDoWally.y, "Achou " + wally.nome + "!!!",
                        { fontFamily: 'Arial', fontSize: 40, color: '#000000', backgroundColor: '#ffffff' }).setOrigin(0.5, 0);

        // Remove o objeto para que não possa mais ser clicado para ser encontrado
        this.minigame.removerWally(wally);
        
        // Ganha se encontrar o Wally real
        if (this.minigame.encontrouTodos()) {
            this.ganhar();
        }
        else {
            // Destrói o texto de feedback visual após três segundos e meio (3500 milissegundos)
            setTimeout(() => texto.destroy(), 3500);
        }
    }


    // Transiciona para a próxima cena
    ganhar() {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this);
    }


    // Começa a próxima cena, passando os dados atuais do minigame
    comecarProximaCena() {
        this.scene.stop("UI");
        this.scene.start("Final", { dadosMinigame : this.minigame });
    }
}