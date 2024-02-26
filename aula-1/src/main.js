// Importações das cenas que fazem parte do jogo
import Nivel1 from "./cenas/nivel-1/nivel1.js";
import Nivel2 from "./cenas/nivel-2/nivel2.js";
import Menu from "./cenas/menu/menu.js"
import SelecionaNivel from "./cenas/selecionar-nivel/seleciona_nivel.js";

// Configuração para inicialização do jogo
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
        }
    },
    pixelArt: true,
    scene: [Menu, SelecionaNivel, Nivel1, Nivel2]
};

// Inicialização do jogo
const game = new Phaser.Game(config);