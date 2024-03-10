// Importações das cenas que fazem parte do jogo
import Nivel from "./nivel/nivel.js";

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
    scene: [Nivel]
};

// Inicialização do jogo
const game = new Phaser.Game(config);