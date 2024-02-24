export default class Fase1 extends Phaser.Scene {
    player;
    chao;

    preload() {
        this.load.image("terreno", "../../assets/Terrain/Terrain (16x16).png");
        this.load.image("background", "../../assets/Background/Yellow.png");
        this.load.tilemapTiledJSON("mapa1", "../../assets/mapa1.json");
    }

    create() {
        const mapa = this.make.tilemap({ key: "mapa1" });

        const tilesetTerreno = mapa.addTilesetImage("chao", "terreno");
        const tilesetBackground = mapa.addTilesetImage("ceu", "background");

        this.chao = mapa.createLayer("chao", tilesetTerreno, 0, 0);
        const ceu = mapa.createLayer("ceu", tilesetBackground, 0, 0);

        this.chao.setCollisionByProperty({ colisor: true });

        this.physics.add.collider(this.player, this.chao);
    }
}