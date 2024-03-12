// Administrador global de eventos
export const eventosAdm = new Phaser.Events.EventEmitter();

// Limpa todos os eventos
export function limparEventos() {
    eventosAdm.eventNames().forEach((element) => {
        eventosAdm.off(element);        
    });
}