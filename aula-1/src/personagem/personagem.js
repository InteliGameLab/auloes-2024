export class Personagem extends Phaser.Physics.Arcade.Sprite {
    controles;
    teclaInteracao;
    pulando = false;
    velocidade = 200;
    velocidadePulo = -400;

    
    constructor(cena) {
        super(cena, 100, 450, "personagem_idle").setScale(1.7);
        this.controles = cena.input.keyboard.createCursorKeys();
        this.teclaInteracao = cena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }


    adicionarPersonagemACena(cena) {
        cena.add.existing(this);
        cena.physics.add.existing(this);
        this.setCollideWorldBounds(true)
        this.anims.play("personagem_idle", true);
    }


    configurarInteracao(cena, funcao) {
        this.teclaInteracao.on("down", funcao, cena)
    }


    movimentar() {
        if (this.body.onFloor()) {
            this.pulando = false;
        }

        if (this.controles.up.isDown && !this.pulando) {
            this.pular();
        }
    
        if (this.body.velocity.y > 0 && this.pulando) {
           this.cair();
        }
    
        if(this.controles.right.isDown) {
            this.movimentarDireita();
            return;
        }
    
        if (this.controles.left.isDown) {
            this.movimentarEsquerda();
            return;
        }
    
        if (!this.pulando) {
            this.anims.play('personagem_idle', true);
        }

        this.setVelocityX(0);
    }
    

    movimentarDireita() {
        this.setVelocityX(this.velocidade);
        this.setFlipX(false);
        if (!this.pulando) {
            this.anims.play('personagem_andando', true);
        }
    }
    

    movimentarEsquerda() {
        this.setVelocityX(-this.velocidade);
        this.setFlipX(true);
        if (!this.pulando) {
            this.anims.play('personagem_andando', true);
        }
    }
    

    pular() {
        this.pulando = true;
        this.setVelocityY(this.velocidadePulo);
        this.anims.play('personagem_pulando', true);  
    }
    

    cair() {
        this.anims.play('personagem_caindo', true);
    }
}


export function carregarSpritesPersonagem(cena) {
    cena.load.spritesheet('personagem_idle', 'assets/Main Characters/Ninja Frog/Idle (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    cena.load.spritesheet('personagem_andando', 'assets/Main Characters/Ninja Frog/Run (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    cena.load.spritesheet('personagem_pulando', 'assets/Main Characters/Ninja Frog/Jump (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    cena.load.spritesheet('personagem_caindo', 'assets/Main Characters/Ninja Frog/Fall (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });
}

export function criarAnimacoesPersonagem(cena) {
    cena.anims.create({
        key: 'personagem_idle',
        frames: cena.anims.generateFrameNumbers('personagem_idle', {
            start: 0,
            end: 10 
        }),
        frameRate: 10,
        repeat: -1
    });

    cena.anims.create({
        key: 'personagem_andando',
        frames: cena.anims.generateFrameNumbers('personagem_andando', {
            start: 0,
            end: 11 
        }),
        frameRate: 10,
        repeat: -1
    });

    cena.anims.create({
        key: 'personagem_pulando',
        frames: cena.anims.generateFrameNumbers('personagem_pulando'),
        frameRate: 10,
        repeat: 0
    });

    cena.anims.create({
        key: 'personagem_caindo',
        frames: cena.anims.generateFrameNumbers('personagem_caindo'),
        frameRate: 10,
        repeat: 0
    });
}