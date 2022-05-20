// For

function multiplicaPorDois(arr) {
    let multiplicados = [];
    for (let i =0; i <arr.length; i++) { // repete o bloco de código executando de acordo com a condição de parada for verdadeira
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2,33,458,356,40];

multiplicaPorDois(meusNumeros); // multiplica cada elemento do array 

// For in

function forInExemplo (obj) {
    for (prop in obj) { /// aqui o prop rece o valor, uma copia do valor de obj
        console.log(prop);
    }
}

const meuObjeto1 = {
    nome: 'Maria',
    idade: '23',
    cidade: 'Passo Fundo',
}

forInExemplo(meuObjeto1); // retorna os valores (chaves):
// nome
// idade
// cidade


//se quiser acessar os valores de nome, idade e cidade deve-se ser realizado da seguinte forma:

function forInExemplo (obj) {
    for (prop in obj) { /// aqui o prop rece o valor, uma copia do valor de obj
        console.log(obj[prop]); // o valor de prop em obj
    }
}

const meuObjeto2 = {
    nome: 'Maria',
    idade: '23',
    cidade: 'Passo Fundo',
}

forInExemplo(meuObjeto2); // retorna os valores de nome, idade e cidade:
// Maria
// 23
// Passo Fundo


// For of

function logLetras(palavra) {
    for (letra of palavra) { // letra recebe o valor de cada letra da palavra palavra
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra)

//a
//b
//a
//c
//a
//x
//i

// ----------------------------------------------------------------------------------------------


// While
    // roda enquato a condição for verdadeira e para de executar o laço quando a coondição do while for falsa
function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num ++
    }
}

exemploWhile()
//0
//1
//2
//3
//4
//5


// Do...While
    // executa instruções até que a condição se torne false, porém a primeira execução sempre ocorre,
    // o laço é executado pelo menos uma vez

function exemploDoWhile1() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num <=5)
}

exemploDoWhile1()
//1
//2
//3
//4
//5


//ex:

function exemploDoWhile2() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while (num <=5)
}

exemploDoWhile2()
//6


