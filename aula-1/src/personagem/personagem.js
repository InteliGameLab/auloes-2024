export const criarPersonagem = (scene) => {
    const personagem = scene.physics.add.sprite(700, 200, 'personagem_idle');
    personagem.setScale(1.7);
    animacaoPersonagem(scene);
    return personagem;
}

export const spritesPersonagem = (scene) => {
    scene.load.spritesheet('personagem_idle', 'assets/Main Characters/Ninja Frog/Idle (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    scene.load.spritesheet('personagem_andando', 'assets/Main Characters/Ninja Frog/Run (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    scene.load.spritesheet('personagem_pulando', 'assets/Main Characters/Ninja Frog/Jump (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });

    scene.load.spritesheet('personagem_caindo', 'assets/Main Characters/Ninja Frog/Fall (32x32).png', {
        frameWidth: 32,
        frameHeight: 32
    });
}

export const animacaoPersonagem = (scene) => {
    scene.anims.create({
        key: 'personagem_idle',
        frames: scene.anims.generateFrameNumbers('personagem_idle', {
            start: 0,
            end: 10 
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'personagem_andando',
        frames: scene.anims.generateFrameNumbers('personagem_andando', {
            start: 0,
            end: 11 
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'personagem_pulando',
        frames: scene.anims.generateFrameNumbers('personagem_pulando'),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'personagem_caindo',
        frames: scene.anims.generateFrameNumbers('personagem_caindo'),
        frameRate: 10,
        repeat: 0
    });
}