/*
Um jogador de SimCity, um simulador de criação de cidades, deseja saber qual das suas metrópoles possui a maior
densidade demográfica. Para isso, cada cidade é armazenada em uma lista de apenas dois índices, na qual a primeira
posição (cidade[0]) conterá o número de habitantes e a segunda posição (cidade[1]) conterá a área da cidade em metros quadrados.
Para calcular a densidade demográfica (hab/km²), é necessário dividir a população pela área da cidade.

Estas pequenas listas de cidades serão armazenadas em uma OUTRA lista, que conterá todas as cidades.

Para encontrar a cidade com maior densidade demográfica, o sistema precisa de uma função que irá percorrer esta
lista de cidades e retornar o valor da maior densidade demográfica.
Qual das opções abaixo representaria o código adequado para tal função?
*/

function maiorDensidadeDemografica(lista) {
    let maior = 0;
    for (cidade of lista) {
        let densidade = cidade[0] / cidade[1];
        if (densidade > maior) {
            maior = densidade;
        }
    }
    return maior;
}


function maiorDensidadeDemografica(lista) {
    for (cidade of lista) {
        let densidade = cidade[0] / cidade[1];
        console.log(densidade);
        if (densidade > maior) {
            maior = densidade;
        }
    }
    return maior;
}


function maiorDensidadeDemografica(lista) {
    for (cidade of lista) {
        let maior = 0;
        let densidade = cidade[0] / cidade[1];
        if (densidade > maior) {
            maior = densidade;
            return maior;
        }
    }
}


function maiorDensidadeDemografica(lista) {
    let maior = 10000;
    let densidade = cidade[0] / cidade[1]; 
    for (cidade of lista) {
        if (densidade > maior) {
            maior = densidade;
        }
        return maior;
    }
}


function maiorDensidadeDemografica(lista) {
    for (cidade of lista) {
        let maior = 0;
        if (cidade[0] / cidade[1] > maior) {
            maior = cidade[0] / cidade[1];
        }
    }
    return maior;
}
