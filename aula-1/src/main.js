import Nivel1 from "./cenas/nivel-1/nivel1.js";

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
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: Nivel1
};


const game = new Phaser.Game(config);