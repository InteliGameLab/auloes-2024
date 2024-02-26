import Personagem from "../../personagem/personagem.js";
import { Abacaxi, carregarSpriteAbacaxi, criarAnimacaoAbacaxi } from "../../abacaxi/abacaxi.js";

// Classe de cena do segundo nível
export default class Nivel2 extends Phaser.Scene {
    
    // Mapa da cena
    mapa;
    // Personagem principal
    personagem;
    // Chão do mapa
    chao;
    // Abacaxi da vitória! (Coletável que gera a tela de vitória)
    abacaxi;

    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel2"
    constructor() {
        super({ key: "Nivel2" });
    }


    preload() {
        // Carregamento dos recursos do nível 2
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa2", "assets/mapa2.json");

        carregarSpriteAbacaxi(this);
    }


    create() {
        // Trasição de fade in para quando a cena iniciar
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        // Configuração da câmera e criação do abacaxi, do personagem e do cenário
        criarAnimacaoAbacaxi(this);

        this.criarMapa();

        this.criarPersonagem();

        this.configurarCamera();
        
        this.criarAbacaxi();
    }


    // Cria um personagem e o configura apropriadamente
    criarPersonagem() {
        this.personagem = new Personagem(this);
        this.personagem.adicionarPersonagemACena(this);

        // Adiciona a colisão entre o personagem e o chão do nível
        this.physics.add.collider(this.personagem, this.chao);
    }


    // Cria um abacaxi e o configura apropriadamente
    criarAbacaxi() {
        this.abacaxi = new Abacaxi(this);
        this.abacaxi.adicionarAbacaxiACena(this);
        
        // Adiciona detecção de sobreposição entre o personagem e o abacaxi (como uma colisão sem forças resultantes)
        this.physics.add.overlap(this.personagem, this.abacaxi, this.win, null, this)
    }


    // Cria o mapa a partir de um tilemap feito no software Tiled e exportado no formato ".json"
    criarMapa() {
        // Iniciando um tilemap vazio
        this.mapa = this.make.tilemap({ key: "mapa2" });

        // Adicionando imagens ao tilemap
        const tilesetTerreno = this.mapa.addTilesetImage("chao", "terreno");
        const tilesetCeu = this.mapa.addTilesetImage("ceu", "fundo");

        // Criando camadas do tilemap
        const ceu = this.mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = this.mapa.createLayer("chao", tilesetTerreno, 0, 0);
        
        // Especificando que o chão é um objeto com que se pode colidir
        this.chao.setCollisionByProperty({ colisor: true });
    }


    // Configura os limites da câmera de acordo com o mapa, altera o zoom e manda ela seguir o personagem principal
    configurarCamera() {
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
        this.cameras.main.startFollow(this.personagem, true, 0.05, 0.05);
        this.cameras.main.setZoom(1.5);
    }


    update() {
        // Movimenta o personagem principal a cada frame
        this.personagem.movimentar();
    }


    win() {
        // Some com o abacaxi
        this.abacaxi.destroy()

        // Escreve "Parabéns!" na tela
        this.add.text(this.game.renderer.width / 2 - 110, this.game.renderer.height * 0.20, 'Parabéns!',
         { fontFamily: 'Roboto', fontSize: '64px', fill: '#000000' });
         
        // Aciona um timer para chamar a função "transicionarParaMenu" depois de 5 segundos (5000 milissegundos)
         this.time.delayedCall(5000, this.transicionarParaMenu, [], this);
    }


    // Faz uma transição estilo fade out para o menu
    transicionarParaMenu() {
        this.cameras.main.fadeOut(1000, 0, 0, 0); 
        this.cameras.main.once("camerafadeoutcomplete", this.voltarAoMenu, this)

    }

    // Volta ao menu principal
    voltarAoMenu() {
        this.scene.transition({ target: "Menu"});
        
    }
}