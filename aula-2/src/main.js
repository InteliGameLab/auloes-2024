// Importações das cenas que fazem parte do jogo
import UI from "./cenas/UI/cenaUI.js";
import Nivel from "./cenas/nivel/nivel.js";

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
            gravity: { y: 0 }, // Jogo não precisará de gravidade
        }
    },
    debug: true,
    pixelArt: true,
    scene: [Nivel, UI]
};

// Inicialização do jogo
const game = new Phaser.Game(config);