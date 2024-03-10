// Classe de cena do primeiro nível!
export default class Nivel extends Phaser.Scene {

    // Construtor da classe. Avisa ao Phaser que, para se referir a essa cena, utiliza-se a chave "Nivel"
    constructor() {
        super({ key: "Nivel" });
    }


    preload() {
        // Carregamento dos recursos do nível
        this.load.image("fundo", "assets/fundo.jpg");
    }


    create() {

        this.configurarCena();

        // Lista de nomes
        let nomes = ["Adele", "Daft Punk", "Gorillaz", "David Bowie", "Amy Winehouse", "Freddy Mercury"];

        // Criar um contêiner para o fundo do menu
        let fundoContainer = this.add.container(0, 0);

        // Adicionar um retângulo como fundo
        let fundo = this.add.rectangle(0, 0, 200, this.cameras.main.height, 0x333333);
        fundo.setOrigin(0);

        // Adicionar o retângulo ao contêiner
        fundoContainer.add(fundo);

        // Posição inicial dos nomes
        let posX = 220;
        let posY = 50;

        // Criar um contêiner para os nomes
        let nomesContainer = this.add.container(0, 0);

        // Criar texto para cada nome na lista
        nomes.forEach(nome => {
            let textoNome = this.add.text(posX, posY, nome, { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' })
                .setOrigin(0); // Definir a origem para o canto superior esquerdo

            // Adicionar o texto ao contêiner de nomes
            nomesContainer.add(textoNome);

            // Atualizar a posição para o próximo nome
            posY += textoNome.height + 10;
        });

        fundoContainer.add(nomesContainer);
        
        // Configurar os contêineres para serem fixos na tela (câmera UI)
        this.cameras.main.setRenderToTexture(fundoContainer);
        this.cameras.main.setRenderToTexture(nomesContainer);

    }
    

    update() {

    }

    configurarCena() {
        // Carregar a imagem de fundo
        let fundo = this.add.image(0, 0, "fundo");
    
        // Definir a origem da imagem de fundo para o canto superior esquerdo
        fundo.setOrigin(0);
        
        this.cameras.main.setBounds(0, 0, fundo.width, fundo.height);
        this.cameras.main.setZoom(0.7);
        // Habilitar a interação com o cursor do mouse
        this.input.mouse.disableContextMenu();
    
        // Variáveis para rastrear a posição do mouse
        let lastPointerX;
        let lastPointerY;
    
        // Evento para registrar a posição inicial do mouse
        this.input.on('pointerdown', function (pointer) {
            lastPointerX = pointer.x;
            lastPointerY = pointer.y;
        });
    
        // Evento para mover a câmera quando o mouse é arrastado
        this.input.on('pointermove', function (pointer) {
            if (pointer.isDown) {
                let deltaX = lastPointerX - pointer.x;
                let deltaY = lastPointerY - pointer.y;
                this.cameras.main.scrollX += deltaX;
                this.cameras.main.scrollY += deltaY;
                lastPointerX = pointer.x;
                lastPointerY = pointer.y;
            }
        }, this);
    }
}