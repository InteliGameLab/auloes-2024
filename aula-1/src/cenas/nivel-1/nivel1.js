import { Personagem, criarAnimacoesPersonagem, carregarSpritesPersonagem } from "../../personagem/personagem.js";

export default class Nivel1 extends Phaser.Scene {
    mapa;
    personagem;
    chao;
    porta;


    constructor() {
        super({ key: "Nivel1" });
    }


    preload() {
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("transicao", "assets/Other/Objects.png")
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa1", "assets/mapa1.json");
    }


    create() {

        this.criarMapa();
        
        this.criarPersonagem();

        this.configurarCamera();

        this.configurarLimitesDoMundo();
    }


    criarPersonagem() {
        this.personagem = new Personagem(this);
        this.personagem.configurarInteracao(this, this.entrar);
        this.personagem.adicionarPersonagemACena(this);

        this.physics.add.collider(this.personagem, this.chao);
    }


    criarMapa() {
        this.mapa = this.make.tilemap({ key: "mapa1" });

        const tilesetTerreno = this.mapa.addTilesetImage("chao", "terreno");
        const tilesetPorta = this.mapa.addTilesetImage("porta", "transicao")
        const tilesetCeu = this.mapa.addTilesetImage("ceu", "fundo");

        const ceu = this.mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = this.mapa.createLayer("chao", tilesetTerreno, 0, 0);
        this.porta = this.mapa.createLayer("porta", tilesetPorta, 0, 0);

        this.chao.setCollisionByProperty({ colisor: true });
    }


    configurarCamera() {
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
        this.cameras.main.startFollow(this.personagem, true, 0.05, 0.05);
        this.cameras.main.setZoom(1.5);
    }


    configurarLimitesDoMundo() {
        this.physics.world.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
    }


    update() {
        this.personagem.movimentar();
    }

    
    entrar() {
        if (this.porta.hasTileAtWorldXY(this.personagem.body.position.x, this.personagem.body.position.y)) {
            this.scene.transition({ target: "Nivel2"});
        }
    }
}