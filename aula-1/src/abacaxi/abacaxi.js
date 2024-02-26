// Classe para criação do abacaxi da vitória!
export class Abacaxi extends Phaser.Physics.Arcade.Sprite {

    // Construtor da classe. Inicia um sprite de abacaxi na posição (640, 380) e que interage com a física do jogo
    constructor(cena) {
        super(cena, 640, 380, "abacaxi").setScale(1.5);
    }


    // Função para adicionar o abacaxi criado à cena especificada. Como é um sprite já existente, usa-se o add.existing
    adicionarAbacaxiACena(cena) {
        cena.add.existing(this);
        cena.physics.add.existing(this, true);
        this.anims.play("abacaxi_idle", true); // Começa a animação padrão do abacaxi
    }
}

// Funções para carregamento de imagens do abacaxi. Estão fora da classe porque precisam ser executadas antes da criação de um abacaxi

// Carrega a spritesheet do abacaxi
export function carregarSpriteAbacaxi(cena) {
    cena.load.spritesheet("abacaxi", "assets/Items/Fruits/Pineapple.png", {
        frameWidth: 32,
        frameHeight: 32
    });
}

// Cria as animações do abacaxi
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