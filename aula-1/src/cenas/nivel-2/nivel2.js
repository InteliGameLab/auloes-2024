import { Personagem, carregarSpritesPersonagem } from "../../personagem/personagem.js";
import { Abacaxi, carregarSpriteAbacaxi, criarAnimacaoAbacaxi } from "../../abacaxi/abacaxi.js";


export default class Nivel2 extends Phaser.Scene {
    mapa;
    personagem;
    chao;
    abacaxi;


    constructor() {
        super({ key: "Nivel2" });
    }


    preload() {
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa2", "assets/mapa2.json");

        carregarSpriteAbacaxi(this);
    }


    create() {
        criarAnimacaoAbacaxi(this);

        this.criarMapa();

        this.criarPersonagem();

        this.configurarCamera();
        
        this.criarAbacaxi();
    }


    criarPersonagem() {
        this.personagem = new Personagem(this);
        this.personagem.adicionarPersonagemACena(this);

        this.physics.add.collider(this.personagem, this.chao);
    }


    criarAbacaxi() {
        this.abacaxi = new Abacaxi(this);
        this.abacaxi.adicionarAbacaxiACena(this);
        
        this.physics.add.overlap(this.personagem, this.abacaxi, this.win, null, this)
    }


    criarMapa() {
        this.mapa = this.make.tilemap({ key: "mapa2" });

        const tilesetTerreno = this.mapa.addTilesetImage("chao", "terreno");
        const tilesetCeu = this.mapa.addTilesetImage("ceu", "fundo");

        const ceu = this.mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = this.mapa.createLayer("chao", tilesetTerreno, 0, 0);
        
        this.chao.setCollisionByProperty({ colisor: true });
    }


    configurarCamera() {
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels, true, true, true, true);
        this.cameras.main.startFollow(this.personagem, true, 0.05, 0.05);
        this.cameras.main.setZoom(1.5);
    }


    update() {
        this.personagem.movimentar();
    }


    win() {
        this.abacaxi.destroy()
    }
}