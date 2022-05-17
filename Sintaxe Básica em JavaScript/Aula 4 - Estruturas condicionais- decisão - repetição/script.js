var jogador1 = 0;
var jogador2 = 0;
var placar;

// Condições
// Aninhamento de ifs
if (jogador1 != 1){

    if (jogador1 > 0) { // condicao para exeucutar o console.log("Jogador1 marcou ponto")
        console.log("Jogador 1 marcou ponto");
    }else if (jogador2 > 0){
        console.log("Jogador 2 marcou ponto");
    } else { // caso contrário (caso a condicao do if e else if nao forem verdadeiras)
        console.log("Ninguém marcou ponto");
    }
}

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'): console.log('Os jogadores são invalidos');

if (jogador1 > 0 && jogador2 == 0) { // condicao para exeucutar o console.log("Jogador1 marcou ponto")
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2;

}else if (jogador2 > 0 && jogador1 == 0){
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;

} else { // caso contrário (caso a condicao do if e else if nao forem verdadeiras)
    console.log("Ninguém marcou ponto");
}


// usando o switch/case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;

    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default: 
        console.log('Ninguém ganhou');   
}

// Repetições

// for , executa instruções até que ela seja falsa

let array = ['valor1','valor2','valor3','valor4','valor5'];

let object = { propriedade1 : 'valor1', propriedade2 : 'valor2', propriedade3 :'valor3', propriedade4 :'valor4',propriedade5 :'valor5'};

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);   

}


for (let i in array) {
    console.log(i);   

}

for (j in object) {
    console.log(j);   

}

for (j of array) {// for of
    console.log(j);   

}

for (j of object.propriedade1) { // for of com objetos , nao é efeiciente com objetos
    console.log(j);   

}


// While (enquanto que...)
var a = 0;

while (a < 10) { // for of com objetos , nao é efeiciente com objetos
    a++; // iterando
    console.log(a);   

}
// do while (executa até que determinada condição seja falsa, a verificação é feita depois da execução)
do {
    a++;
    console.log(a); 
} while (a < 10);
