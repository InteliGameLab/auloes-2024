// Importações das cenas que fazem parte do jogo
import UI from "./cenas/UI/cenaUI.js";
import Final from "./cenas/final/final.js";
import Nivel1 from "./cenas/nivel/nivel.js";
import Menu from "./cenas/menu/menu.js";


const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;
const MAX_WIDTH = DEFAULT_WIDTH * 1.5;
const MAX_HEIGHT = DEFAULT_HEIGHT * 1.5;


// Configuração para inicialização do jogo
var config = {
    type: Phaser.AUTO,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    disableContextMenu: true, // Desativa a interação do navegador com o botão direito do mouse
    backgroundColor: "0x00adee",
    scale: {
        mode: Phaser.Scale.NONE,
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
    scene: [Nivel1, UI, Final]
};

// Inicialização do jogo
export const game = new Phaser.Game(config);


// the custom resize function
const resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight

    let width = DEFAULT_WIDTH
    let height = DEFAULT_HEIGHT
    let maxWidth = MAX_WIDTH
    let maxHeight = MAX_HEIGHT

    let scale = Math.min(w / width, h / height)
    let newWidth = Math.min(w / scale, maxWidth)
    let newHeight = Math.min(h / scale, maxHeight)

    let defaultRatio = DEFAULT_WIDTH / DEFAULT_HEIGHT
    let maxRatioWidth = MAX_WIDTH / DEFAULT_HEIGHT
    let maxRatioHeight = DEFAULT_WIDTH / MAX_HEIGHT

    // smooth scaling
    let smooth = 1
    const maxSmoothScale = 1.15
    const normalize = (value, min, max) => {
        return (value - min) / (max - min)
    }
    if (width / height < w / h) {
        smooth =
            -normalize(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
    } 
    else {
        smooth =
            -normalize(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
    }

    // resize the game
    game.scale.resize(newWidth * smooth, newHeight * smooth)

    // scale the width and height of the css
    game.canvas.style.width = newWidth * scale + 'px'
    game.canvas.style.height = newHeight * scale + 'px'

    // center the game with css margin
    game.canvas.style.marginTop = `${(h - newHeight * scale) / 2}px`
    game.canvas.style.marginLeft = `${(w - newWidth * scale) / 2}px`


    game.scene.scenes.forEach(function(scene) {
        scene.children.list.forEach(function(child) {
            if (typeof child.onResize === 'function') {
                child.onResize();
            }
        });
    });
}


window.addEventListener('resize', event => {
    resize()
})

resize();