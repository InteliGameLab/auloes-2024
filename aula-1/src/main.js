


import Nivel1 from "./cenas/nivel-1/nivel1.js";
import Nivel2 from "./cenas/nivel-2/nivel2.js";
import Menu from "./cenas/menu/menu.js"
import Nivel from "./cenas/selecionar-nivel/niveis.js";

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
            gravity: { y: 900 },
            debug: true
        }
    },
    pixelArt: true,
    scene: [Menu, Nivel, Nivel1, Nivel2]
};


const game = new Phaser.Game(config);