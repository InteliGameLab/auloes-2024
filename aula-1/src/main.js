import { criarPersonagem, spritesPersonagem } from "./personagem/main.js";

console.log("oi")

class Demo extends Phaser.Scene {
    personagem;

    constructor() {
        super('Demo');
    };

    preload() {
        this.load.image('sky','./assets/Background/Blue.png');
        spritesPersonagem(this);
    };

    create() {
        this.add.image(400,200,'sky');
        this.personagem = criarPersonagem(this);
        this.personagem.anims.play('personagem_idle', true);
    }

    update() {
    };
}

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: Demo
};


const game = new Phaser.Game(config);