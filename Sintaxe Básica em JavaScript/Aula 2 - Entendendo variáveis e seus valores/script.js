// Boleanos

var vOuF = false;
console.log (vOuF);
console.log (typeof(vOuF));

// Number (números)

var numero = 25;
console.log (numero);
console.log (typeof(numero));


// String 
var nome = 'Leon';
console.log (nome);
console.log (typeof(nome));


// Declarações de variaveis

// var: escopo global e local, pode ter seu valor alterado,
// se não tiver um valor inicial sera tratada como null.

var variavel = 'é modificavel (o tipo var)';
variavel = 'foi modificada (o tipo var)';

console.log (variavel);
console.log (typeof(variavel));

// let: escopo local de bloco, pode ter seu valor alterado,
// se não tiver um valor inicial sera tratada como null.

let letVariavel = 'é modificavel';
letVariavel = 'foi modificada';
console.log (letVariavel);
console.log (typeof(letVariavel));


// const: escopo local de bloco, pode ter seu valor alteradosomente leitura,
// é obrigatório ter o valor inicializado e não pode ser alterado durante o programa.

const constVariavel = 'não é modificavel, voce só pode ler';
console.log (constVariavel);
console.log (typeof(constVariavel));


/*
Escopo Global: quando a variavel é declarada fora de bloco,
sua visibilidade fica disponível em todo código


Escopo Local: quando a variavel é declarada dentro de um bloco,
sua visibilidade pode ficar disponivel ou não
*/

var escopoGlobal  = 'global';
console.log(escopoGlobal);



function escopoLocal(){
    let escopoLocalInterno = 'interno';
}

// console.log (escopoLocalInterno); // apresentará um erro, pois o programa não pode acessar, printar essa variavel de escopo local da função

console.log (escopoGlobal); // pode ser printada na tela , pois está desclarada em um escopo global


/*
Operador de atribuição: o sinal de "=" serve para atribuir um valor a uma variavel.

Operador de comparação: usa-se "==" que compara duas variaveis e retorna true ou false, sobre a igualdade entre os valores, true se tiverem o meso valor e false se os valores são iguais

Operador de commparação idêntica: usa-se "===" para comparar se os valores são exatamente iguais
tanto o valor e o tipo iguais, retorna true ou false também

Operadores aritméticos: "+" -> soma, "-" -> subtração, "*" -> multiplicação , "/" divisao real,
"%" resto da divisao, "**" potenciação
*/  

// Atribuição
var atribuicao = 'atribuida';
console.log (atribuicao);
console.log (typeof(atribuicao));

// Comparação
var comparacao = '0' == 0;
console.log (comparacao);
console.log (typeof(comparacao));

// Comparação Identica
var comparacaoIdentica = '0' === 0;
console.log (comparacaoIdentica);
console.log (typeof(comparacaoIdentica));


// Adição (soma)
var adicao = 1+1;
console.log (adicao);
console.log (typeof(adicao));


// Subtração(soma)
var subtracao = 1-1;
console.log (subtracao);
console.log (typeof(subtracao));

// Multiplicação
var multiplicacao = 2*3;
console.log (multiplicacao);
console.log (typeof(multiplicacao));

// Divisão
var divisao = 6/3;
console.log (divisao);
console.log (typeof(divisao));

// Divisão real (resto)
var divisaoReal = 7%3;
console.log (divisaoReal);
console.log (typeof(divisaoReal));

// Potenciação


var potenciacao = 2**3;
console.log (potenciacao);
console.log (typeof(potenciacao));




// Operadores relacionais, retornam true ou false sobre a relação entre valores

// > maior que;
var maior = 2>3;
console.log (maior);
console.log (typeof(maior));


// < menor que;
var menor = 2<3;
console.log (menor);
console.log (typeof(menor));


// >= maior ou igual a;
var maiorOuIgual = 2>=3;
console.log (maiorOuIgual);
console.log (typeof(maiorOuIgual));


// <= menor ou igual a;
var menorOuIgual = 2<=3;
console.log (menorOuIgual);
console.log (typeof(menorOuIgual));


// Operadores lógicos

// "&&" : é o operadore "e" considera que todods os valores sejam true (verdadeiros);
var e = true && false;
console.log (menorOuIgual);
console.log (typeof(menorOuIgual));


// "||" : é o operadore "ou" considera que qualquer valore seja true (verdadeiro);
var ou = true || false;
console.log (menorOuIgual);
console.log (typeof(menorOuIgual));



// "!" : é o operadore "não" inverte o valore de true para false ou de false para true;
var nao = !true;
console.log (menorOuIgual);
console.log (typeof(menorOuIgual));