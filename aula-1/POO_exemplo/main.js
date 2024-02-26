// Importa a classe "ModeloPersonagem" para que possa ser utilizada nesse arquivo
import { ModeloPersonagem } from "./modeloPersonagem";

// Cria um persnoagem com nome Ninja Frog, sprite ninjaFrog.png e frase "Olá, eu sou o Ninja Frog!"
// É so colocar as características na ordem do construtor (nome, sprite, frase) e o personagem é criado!
let ninjaFrog = new ModeloPersonagem("Ninja Frog", "ninjaFrog.png", "Olá, eu sou o Ninja Frog!");

// Imprime no console a descrição do primeiro personagem
ninjaFrog.mostrarDescricao();


// Cria um persnoagem com nome Mask Dude, sprite maskDude.png e frase "Olá, eu sou o Mask Dude!"
// É so colocar as características na ordem do construtor (nome, sprite, frase) e o personagem é criado!
let maskDude = new ModeloPersonagem("Mask Dude", "maskDude.png", "Olá, eu sou o Mask Dude!");

// Imprime no console a descrição do segundo personagem
maskDude.mostrarDescricao();