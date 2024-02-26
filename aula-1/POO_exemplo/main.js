// Importa a classe "Carro" para que possa ser utilizada nesse arquivo
import { Carro } from "./carro";

// Cria um carro com nome Sandero, da marca Renault, do ano de 2014 e que custa R$50.000,00
let carro1 = new Carro("Sandero", "Renault", 2014, 50000);

// Cria um carro com nome Civic, da marca Honda, do ano de 2015 e que custa R$70.000,00
let carro2 = new Carro("Civic", "Honda", 2015, 70000);

// Imprime no console a descrição do primeiro carro
carro1.mostrarDescricao();

// Imprime no console a descrição do segundo carro
carro2.mostrarDescricao();