import { criarPersonagem, spritesPersonagem } from "../../personagem/personagem.js";
import { configurarControles, criarControles } from "../../personagem/controles.js";

export default class Nivel1 extends Phaser.Scene {
    personagem;
    controles;
    chao;

    preload() {
        this.load.image("terreno", "assets/Terrain/Terrain (16x16).png");
        this.load.image("ceu", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa1", "assets/mapa1.json");
        spritesPersonagem(this);
    }

    create() {
        const mapa = this.make.tilemap({ key: "mapa1" });

        const tilesetTerreno = mapa.addTilesetImage("chao", "terreno");
        const tilesetBackground = mapa.addTilesetImage("background", "ceu");

        const ceu = mapa.createLayer("background", tilesetBackground, 0, 0);
        this.chao = mapa.createLayer("terrain", tilesetTerreno, 0, 0);

        this.personagem = criarPersonagem(this);
        this.personagem.anims.play('personagem_idle', true);

        this.chao.setCollisionByProperty({ collider: true });

        this.physics.add.collider(this.personagem, this.chao);

        this.controles = criarControles(this);
    }

    update() {
        configurarControles(this.controles, this.personagem, this);
    }
}