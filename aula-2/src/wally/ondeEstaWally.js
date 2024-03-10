import { Wally } from "./wally";

export class OndeEstaWally {
    imagem;
    wallys = [];

    constructor(cena, nomeImagem) {
        this.imagem = cena.add.image(0, 0, nomeImagem).setOrigin(0, 0);
    }

    adicionarWally(cena, nomeWally, wallyX, wallyY, largura, altura) {
        this.wallys.push(new Wally(cena, nomeWally, wallyX, wallyY, largura, altura));
    }
}