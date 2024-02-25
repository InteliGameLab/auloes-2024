import { criarPersonagem, spritesPersonagem } from "../../personagem/personagem.js";
import { movimentar, criarControles } from "../../personagem/controles.js";


export default class Nivel2 extends Phaser.Scene {
    personagem;
    controles;
    chao;
    abacaxi;

    constructor() {
        super({ key: "Nivel2" });
    }

    preload() {
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.spritesheet("abacaxi", "assets/Items/Fruits/Pineapple.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.tilemapTiledJSON("mapa2", "assets/mapa2.json");
        spritesPersonagem(this);
    }

    create() {
        const mapa = this.make.tilemap({ key: "mapa2" });

        const tilesetTerreno = mapa.addTilesetImage("chao", "terreno");
        const tilesetCeu = mapa.addTilesetImage("ceu", "fundo");

        const ceu = mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = mapa.createLayer("chao", tilesetTerreno, 0, 0);

        this.personagem = criarPersonagem(this);
        this.personagem.anims.play('personagem_idle', true);

        this.chao.setCollisionByProperty({ colisor: true });

        this.physics.add.collider(this.personagem, this.chao);
        
        this.abacaxi = this.physics.add.sprite(640, 380, "abacaxi");
        this.abacaxi.body.setAllowGravity(false);
        this.abacaxi.setScale(1.5, 1.5);

        this.anims.create({
            key: "abacaxi_idle",
            frames: this.anims.generateFrameNumbers("abacaxi", {
                start: 0,
                end: 16
            }),
            frameRate: 25,
            repeat: -1
        });

        this.abacaxi.anims.play("abacaxi_idle", true);
        this.personagem.anims.play('personagem_idle', true);

        this.physics.add.overlap(this.personagem, this.abacaxi, this.win, null, this)

        this.controles = criarControles(this);

    }

    update() {
        movimentar(this.controles, this.personagem);
    }

    win() {
        this.abacaxi.destroy()
    }
}