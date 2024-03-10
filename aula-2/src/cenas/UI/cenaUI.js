import { eventosAdm } from "../../eventosAdm/eventosAdm.js";

// Classe de cena da User Interface dos níveis!
export default class UI extends Phaser.Scene {
    // Contêiner de nomes encontrados
    nomesContainer;
    // Posição inicial no eixo Y para adicionar nomes encontrados ao contêiner
    nomeY = 20;

    
    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "UI"
    constructor() {
        super({ key: "UI" });
    }


    create() {
        // Evento para adicionar o nome no contêiner quando achar alguém
        eventosAdm.addListener("achou", this.adicionarNome, this);

        // Criação do contêiner de nomes encontrados
        this.nomesContainer = this.add.container(0, 0);

        // Adicionar um retângulo como fundo do contêiner
        const fundo = this.add.rectangle(70, 0, 140, 1450, 0x333333);

        // Adicionar o retângulo de fundo ao contêiner
        this.nomesContainer.add(fundo);

        // Configurar o contêiner para ser fixo na tela (UI)
        this.nomesContainer.setScrollFactor(0); // Segue a câmera
    }


    adicionarNome(wally) {
        // Adiciona texto do nome de quem foi encontrado
        const textoNome = this.add.text(10, this.nomeY, wally.nome, { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });

        // Adiciona a nomeY para o nome do próximo aparecer mais embaixo
        this.nomeY += textoNome.height + 10;

        // Adiciona o texto criado ao contêiner de nomes
        this.nomesContainer.add(textoNome);
    }

}