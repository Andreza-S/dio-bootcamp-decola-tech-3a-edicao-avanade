

/*
Tipos de funções e formatos (sintaxes) de funções

*/


// function

function nome (paramateros) {
    return; // retornar um valor e para a função
}


// função anonima

const soma1 = function (a, b) {
    return a + b;
}

soma1 (1,2); // retornará 3
soma1 (4,2); // retornará 6


// autoinvocável

(
    function() {
        let name = "Digital Innobvation One"
        return name;
    }
) (); // retorna Digital Innobvation One

// ex:
(
    function (a,b) {
        return a+ b;
    }
) (1,2); // retorna 3

//ex:
const soma3 = (
    function() {
        return a+ b;
    }
)(1,2); // retorna 3


// Callbacks (uma função passada como argumento para outra função)

//ex:
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma2 = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
} 

const resultSoma = calc(soma2,1,2);
const resultSub = calc(sub,1,2);
