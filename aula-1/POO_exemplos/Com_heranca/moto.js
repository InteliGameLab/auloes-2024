import { Veiculo } from "./veiculo";

export class Moto extends Veiculo {
    
    constructor(nome, marca, ano, preco) {
        super(nome, marca, ano, preco);
    }
    
    empinar() {
        console.log("Mandando grau!");
    }
}