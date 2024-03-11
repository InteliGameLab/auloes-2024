import { eventosAdm } from "../eventosAdm/eventosAdm.js";
import { game } from "../main.js"
 
// Controla a câmera de cenas de acordo com movimento de arrastar o mouse
export class CameraMan {
    // Câmera que será controlada pelo "câmera man"
    camera;
    // Mouse para controlar câmera
    mouse;
    // Últimas posições de clique do mouse
    lastPointerX;
    lastPointerY;



    constructor(camera, mouse) {
        this.camera = camera;
        this.mouse = mouse;

        // Eventos aos quais o Camera Man responde
        eventosAdm.addListener("clicou", this.registrarPosicaoMouse, this);
        eventosAdm.addListener("moveu", this.moverCamera, this);
    }


    registrarPosicaoMouse() {
        // Registra a última posição de clique do mouse
        this.lastPointerX = game.input.mousePointer.x;
        this.lastPointerY = game.input.mousePointer.y;
        
    }


    moverCamera() {
        // Verifica se o mouse está sendo pressionado
        if (this.mouse.isDown) {
            // Diferença entre a última posição de clique registrada e a posição do clique atual
            const deltaX = this.lastPointerX - this.mouse.x;
            const deltaY = this.lastPointerY - this.mouse.y;

            // Movendo a câmera de acordo com a diferença entre posições
            this.camera.scrollX += deltaX;
            this.camera.scrollY += deltaY;

            // Registra a nova posição
            this.lastPointerX = this.mouse.x;
            this.lastPointerY = this.mouse.y;
        }
    }
}