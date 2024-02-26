// Classe de cena de seleção de níveis!
export default class SelecionaNivel extends Phaser.Scene {

    // Botão de nível 1
    botao1;
    // Botão de nível 2
    botao2;
    // Próxima cena a ser iniciada
    proximaCena;

    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "SelecionaNivel"
    constructor() {
        super({ key: "SelecionaNivel" });
    };

    preload() {
        // Carregamento das imagens do menu de seleção de níveis
        this.load.image("fundo", "assets/Menu/menu.png");
        this.load.image("1", "assets/Menu/Levels/01.png");
        this.load.image("2", "assets/Menu/Levels/02.png")
    }

    create() {
        // Criando o background do menu de seleção de níveis
        this.add.image(0,0, "fundo")
        .setOrigin(0)
        .setScale(2,1);

         // Criando o botão correspondente ao nível 1
        this.botao1 = this.add.image(640, 360, "1")
        .setScale(3);

         // Criando o botão correspondente ao nível 2
        this.botao2 = this.add.image(640, 460, "2")
        .setScale(3);

        // Dizendo para o Phaser que os botões não são apenas imagens, mas sim objetos com que se pode interagir
        this.botao1.setInteractive();
        this.botao2.setInteractive();

        // Configura o que o botão de nível 1 deve fazer ao ser clicado
        this.botao1.on("pointerup", this.apertouBotao1, this)

        // Configura o que o botão de nível 2 deve fazer ao ser clicado
        this.botao2.on("pointerup", this.apertouBotao2, this)
        
    }


    // O que fazer quando o botão de nível 1 é apertado
    apertouBotao1() {
        // Desabilitando interações com os botões
        this.botao1.disableInteractive();
        this.botao2.disableInteractive();

        // Configura o Nivel1 como próxima cena
        this.proximaCena = "Nivel1"
        this.transicionarParaProximaCena();
    }


     // O que fazer quando o botão de nível 2 é apertado
     apertouBotao2() {
        // Desabilitando interações com os botões
        this.botao1.disableInteractive();
        this.botao2.disableInteractive();

        // Configura o Nivel2 como próxima cena
        this.proximaCena = "Nivel2"
        this.transicionarParaProximaCena();
    }


    // Faz uma transição estilo fade out para a próxima cena
    transicionarParaProximaCena() {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", this.comecarProximaCena, this)
    }


    // Começa a próxima cena
    comecarProximaCena() {
        this.scene.start(this.proximaCena)
    }
}