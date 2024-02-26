// Características de um personagem
let nomePersonagem = 'Ninja Frog';
let spritePersonagem = 'ninjaFrog.png';
let frasePersonagem = 'Olá, eu sou o Ninja Frog!';

let nomePersonagem2 = 'Mask Dude';
let spritePersonagem2 = 'maskDude.png';
let frasePersonagem2 = 'Olá, eu sou o Mask Dude!';

// Ação que mostra as características do personagem
function mostrarPersonagem(nome, sprite, frase) {
    console.log('Nome: ' + nome);
    console.log('Sprite: ' + sprite);
    console.log('Falar: ' + frase);
}

mostrarPersonagem(nomePersonagem, spritePersonagem, frasePersonagem);
mostrarPersonagem(nomePersonagem2, spritePersonagem2, frasePersonagem2);