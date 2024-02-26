export class Abacaxi extends Phaser.Physics.Arcade.Sprite {
    constructor(cena) {
        super(cena, 640, 380, "abacaxi").setScale(1.5);
    }


    adicionarAbacaxiACena(cena) {
        cena.add.existing(this);
        cena.physics.add.existing(this, true);
        this.anims.play("abacaxi_idle", true);
    }
}


export function carregarSpriteAbacaxi(cena) {
    cena.load.spritesheet("abacaxi", "assets/Items/Fruits/Pineapple.png", {
        frameWidth: 32,
        frameHeight: 32
    });
}

export function criarAnimacaoAbacaxi(cena) {
    cena.anims.create({
        key: "abacaxi_idle",
        frames: cena.anims.generateFrameNumbers("abacaxi", {
            start: 0,
            end: 16
        }),
        frameRate: 25,
        repeat: -1
    });
}