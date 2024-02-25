export function criarControles(scene) {
    return scene.input.keyboard.createCursorKeys();
};

export function adicionaTecla(scene, tecla) {
    return scene.input.keyboard.addKey(tecla);
};

export function movimentar(controles, personagem) {

    if (controles.up.isDown && personagem.body.onFloor()) {
        pular(personagem);
    }

    if (personagem.body.velocity.y > 0) {
       cair(personagem);
    }

    if(controles.right.isDown) {
        movimentarDireita(personagem);
        return;
    }

    if (controles.left.isDown) {
        movimentarEsquerda(personagem);
        return;
    }

    personagem.anims.play('personagem_idle', true);
    personagem.setVelocityX(0);
}


const velocidade = 200;
const velocidadePulo = -400;

const movimentarDireita = (personagem) => {
    personagem.setVelocityX(velocidade);
    personagem.setFlipX(false);
    if (personagem.body.onFloor()) {
        personagem.anims.play('personagem_andando', true);
    }
}

const movimentarEsquerda = (personagem) => {
    personagem.setVelocityX(-velocidade);
    personagem.setFlipX(true);
    if (personagem.body.onFloor()) {
        personagem.anims.play('personagem_andando', true);
    }
}

const pular = (personagem) => {
    personagem.setVelocityY(velocidadePulo);
    personagem.anims.play('personagem_pulando', true);  
}

const cair = (personagem) => {
    personagem.anims.play('personagem_caindo', true);
}