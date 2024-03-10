// Importações das cenas que fazem parte do jogo
import UI from "./cenas/UI/cenaUI.js";
import Final from "./cenas/final/final.js";
import Nivel1 from "./cenas/nivel/nivel.js";
import Menu from "./cenas/menu/menu.js";

// Configuração para inicialização do jogo
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.RESIZE,
        // CENTER_BOTH: Dimensiona o conteúdo para que ele seja centralizado tanto horizontal quanto verticalmente na tela.
        // CENTER_HORIZONTALLY: Dimensiona o conteúdo para que ele seja centralizado apenas horizontalmente na tela, mantendo sua posição vertical.
        // CENTER_VERTICALLY: Dimensiona o conteúdo para que ele seja centralizado apenas verticalmente na tela, mantendo sua posição horizontal.
        // ENVELOP: Dimensiona o conteúdo para que ele preencha a tela inteira, mantendo a proporção original e cortando qualquer excesso que não caiba na tela.
        // FIT: Dimensiona o conteúdo para que ele preencha a tela inteira, mantendo sua proporção original e sem cortar nenhum conteúdo.
        // HEIGHT_CONTROLS_WIDTH: A altura do conteúdo controla a largura da tela, mantendo a proporção original.
        // WIDTH_CONTROLS_HEIGHT: A largura do conteúdo controla a altura da tela, mantendo a proporção original.
        // LANDSCAPE: Mantém a orientação da tela em paisagem, independentemente da orientação do dispositivo.
        // PORTRAIT: Mantém a orientação da tela em retrato, independentemente da orientação do dispositivo.
        // RESIZE: Permite que o conteúdo seja redimensionado para se ajustar dinamicamente ao tamanho da tela, atualizando continuamente conforme a tela é redimensionada.

    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // Jogo não precisará de gravidade
        }
    },
    debug: true,
    scene: [Menu, Nivel1, UI, Final]
};

// Inicialização do jogo
const game = new Phaser.Game(config);