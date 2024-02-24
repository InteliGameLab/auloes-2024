import { criarPersonagem, spritesPersonagem } from "../../personagem/personagem.js";

export default class Nivel1 extends Phaser.Scene {
    personagem;
    chao;
    porta;

    preload() {
        this.load.image("terreno", "assets/Terrain/Terrain(16x16).png");
        this.load.image("transicao", "assets/Other/Objects.png")
        this.load.image("fundo", "assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa1", "assets/mapa1.json");
        spritesPersonagem(this);
    }

    create() {
        const mapa = this.make.tilemap({ key: "mapa1" });

        const tilesetTerreno = mapa.addTilesetImage("chao", "terreno");
        const tilesetPorta = mapa.addTilesetImage("porta", "transicao")
        const tilesetCeu = mapa.addTilesetImage("ceu", "fundo");

        const ceu = mapa.createLayer("ceu", tilesetCeu, 0, 0);
        this.chao = mapa.createLayer("chao", tilesetTerreno, 0, 0);
        this.porta = mapa.createLayer("porta", tilesetPorta, 0, 0)

        this.personagem = criarPersonagem(this);
        this.personagem.anims.play('personagem_idle', true);

        this.chao.setCollisionByProperty({ colisor: true });

        this.physics.add.collider(this.personagem, this.chao);
    }

    // TODO: adicionar interação entre personagem e porta. É possível verificar se existe um tile na camada da porta na posição do
    // personagem com this.porta.hasTileAtWorldXY(personagem.x, personagem.y)
}