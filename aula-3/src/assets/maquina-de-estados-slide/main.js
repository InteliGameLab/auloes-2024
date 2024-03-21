let areaDeVisao = {
    x1: 0,
    x2: 10,
    y1: 0,
    y2: 10
}

let vendoInimigo = false;

function patrulhar() {
    // Anda pelo cenário patrulhando e buscando por inimigos
}

function lutar() {
    // Luta e persegue um inimigo no campo de visão
}

function update() {
    if (inimigo.x >= areaDeVisao.x1 &&
        inimigo.x <= areaDeVisao.x2 &&
        inimigo.y >= areaDeVisao.y1 &&
        inimigo.y <= areaDeVisao.y2) {
            
            vendoInimigo = true;
    }

    if (vendoInimigo) {
        lutar();
    }
    else {
        patrulhar();
    }
}