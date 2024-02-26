// Importação da classe para criação do personagem principal
import Personagem from "../../personagem/personagem.js";

// Classe de cena do primeiro nível!
export default class Nivel1 extends Phaser.Scene {
    
    // Mapa da cena
    mapa;
    // Personagem principal
    personagem;
    // Chão do mapa
    chao;
    // Porta para próximo nível
    porta;

    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel1"
    constructor() {
        super({ key: "Nivel1" });
    }


    preload() {
        // Carregamento dos recursos do nível 1
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("transicao", "assets/Other/Objects.png")
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa1", "assets/mapa1.json");
    }


    create() {
        // Trasição de fade in para quando a cena iniciar
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // Criação do cenário e do personagem + configuração da câmera e dos limites do mundo
        this.criarMapa();
        
        this.criarPersonagem();

        this.configurarCamera();

        this.configurarLimitesDoMundo();
    }


    // Cria um personagem e o configura apropriadamente
    criarPersonagem() {
        this.personagem = new Personagem(this);
        this.personagem.configurarInteracao(this, this.entrar);
        this.personagem.adicionarPersonagemACena(this);

        // Adiciona a colisão entre o personagem e o chão do nível
        this.physics.add.collider(this.personagem, this.chao);
    }


    // Cria o mapa a partir de um tilemap feito no software Tiled e exportado no formato ".json"
    criarMapa() {
        // Iniciando um tilemap vazio
        this.mapa = this.make.tilemap({ key: "mapa1" });

        // Adicionando imagens ao tilemap
        const tilesetTerreno = this.mapa.addTilesetImage("chao", "terreno");
        const tilesetPorta = this.mapa.addTilesetImage("porta", "transicao");
        const tilesetCeu = this.mapa.addTilesetImage("ceu", "fundo");

        // Criando camadas do tilemap
        const ceu = this.mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = this.mapa.createLayer("chao", tilesetTerreno, 0, 0);
        this.porta = this.mapa.createLayer("porta", tilesetPorta, 0, 0);

        // Especificando que o chão é um objeto com que se pode colidir
        this.chao.setCollisionByProperty({ colisor: true });
    }


    // Configura os limites da câmera de acordo com o mapa, altera o zoom e manda ela seguir o personagem principal
    configurarCamera() {
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
        this.cameras.main.startFollow(this.personagem, true, 0.05, 0.05);
        this.cameras.main.setZoom(1.5);
    }


    // Configura os limites do mundo de acordo com o mapa
    configurarLimitesDoMundo() {
        this.physics.world.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
    }


    update() {
        // Movimenta o personagem principal a cada frame
        this.personagem.movimentar();
    }

    
    entrar() {
        // Se a porta tem um tile na posição (personagem.x, personagem.y), transicionar para Nível 2
        if (this.porta.hasTileAtWorldXY(this.personagem.body.position.x, this.personagem.body.position.y)) {
            this.transicionarParaProximaCena()
        }
    }

    // Faz uma transição estilo fade out para a próxima cena
    transicionarParaProximaCena() {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }


    // Começa a próxima cena
    comecarProximaCena() {
        this.scene.start("Nivel2")
    }
}