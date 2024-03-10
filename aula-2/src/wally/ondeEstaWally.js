import { Wally } from "./wally.js";

export class OndeEstaWally {
    imagem;
    quantidadeWallys = 0;
    wallys = [];


    constructor(cena, nomeImagem) {
        // Definir a origem da imagem de fundo para o canto superior esquerdo
        this.imagem = cena.add.image(0, 0, nomeImagem).setOrigin(0);
    }


    larguraImagem() {
        return this.imagem.width;
    }


    alturaImagem() {
        return this.imagem.height;
    }


    adicionarWally(cena, nomeWally, wallyX, wallyY, largura, altura) {
        this.wallys.push(new Wally(cena, nomeWally, wallyX, wallyY, largura, altura));
        this.quantidadeWallys += 1;
    }


    removerWally(wally) {
        let index = this.wallys.indexOf(wally);
        
        if (index != -1) {
            this.wallys.splice(index, 1);
        }
    }


    wallysRestantes() {
        return this.wallys.length;
    }
}