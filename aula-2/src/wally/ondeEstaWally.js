import { eventosAdm } from "../eventosAdm/eventosAdm.js";
import { Wally } from "./wally.js";

// Classe de minigame Onde Está Wally
export class OndeEstaWally {
    // Background que contém os personagens a serem encontrados
    imagem;
    // Quantos personagens podem ser encontrados
    quantidadeWallys = 0;
    // Lista de personagens existentes
    wallys = [];


    constructor(cena, nomeImagem) {
        // Adicionando o background à cena
        this.imagem = cena.add.image(0, 0, nomeImagem).setOrigin(0);
    }


    // Retorna a largura da imagem de background
    larguraImagem() {
        return this.imagem.width;
    }


    // Retorna a altura da imagem de background
    alturaImagem() {
        return this.imagem.height;
    }


    // Retorna quantos personagens ainda podem ser encontrados
    wallysRestantes() {
        return this.wallys.length;
    }


    // Retorna quantos personagens foram encontrados pelo jogador
    wallysEncontrados() {
        return this.quantidadeWallys - this.wallysRestantes();
    }
    

    // Adiciona um Wally à cena e à lista
    adicionarWally(cena, nomeWally, wallyX, wallyY, largura, altura, cor) {
        const novoWally = new Wally(cena, nomeWally, wallyX, wallyY, largura, altura, cor);
        this.wallys.push(novoWally);
        this.quantidadeWallys += 1;
        eventosAdm.emit("adicionou", novoWally);
    }


    // Remove um Wally da cena e da lista
    removerWally(wally) {
        let index = this.wallys.indexOf(wally);
        
        if (index != -1) {
            this.wallys.splice(index, 1);
        }
        
        wally.destroy();
    }
}