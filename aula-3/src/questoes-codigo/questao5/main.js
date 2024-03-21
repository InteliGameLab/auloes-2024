class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }


    preload() {
        this.load.image('i', '../../assets/player.png');
    }


    create() {
        this.p = new Phaser.Math.Vector2(0, 0);
        this.v = 100;
        this.i = this.physics.add.image(this.p.x, this.p.y, 'i').setScale(0.05);
        this.t = this.input.keyboard.createCursorKeys();
    }


    update(time, delta) {
        let i = new Phaser.Math.Vector2(0, 0);
        if (this.t.right.isDown) {
            i.x += 1;
        }
        if (this.t.left.isDown) {
            i.x -= 1;
        }
        if (this.t.down.isDown) {
            i.y += 1;
        }
        if (this.t.up.isDown) {
            i.y -= 1;
        }


        if (i.length() > 0) {
            i.normalize();
        }


        this.p.x += i.x * this.v * (delta / 500);
        this.p.y += i.y * this.v * (delta / 500);
        this.p.x = Phaser.Math.Clamp(this.p.x, 0, this.game.config.width);
        this.p.y = Phaser.Math.Clamp(this.p.y, 0, this.game.config.height);
        this.i.setPosition(this.p.x, this.p.y);
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [MainScene]
};

var game = new Phaser.Game(config);
