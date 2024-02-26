import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
    
    constructor(nome, marca, ano, preco) {
        super(nome, marca, ano, preco);
    }

    abrirPorta() {
        console.log("Porta aberta!");
    }
}