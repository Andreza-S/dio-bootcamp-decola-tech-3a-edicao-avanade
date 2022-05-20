/*
Dado um inteiro num, retorne o número de etapas para reduzi-lo a zero .

Em uma etapa, se o número atual for par, você deve dividi-lo por 2, caso contrário, você deve subtrair 1 dele.

 

Exemplo 1:

Entrada	Saída
14	6
Explicação: 

Etapa 1) 14 é par; divida por 2 e obtenha 7. 

Etapa 2) 7 é ímpar; subtraia 1 e obtenha 6.

Etapa 3) 6 é par; divida por 2 e obtenha 3. 

Etapa 4) 3 é ímpar; subtraia 1 e obtenha 2. 

Etapa 5) 2 é par; divida por 2 e obtenha 1. 

Etapa 6) 1 é ímpar; subtraia 1 e obtenha 0.

 

Exemplo 2:

Entrada	Saída
8	4
Explicação: 

Etapa 1) 8 é par; divida por 2 e obtenha 4. 

Etapa 2) 4 é par; divida por 2 e obtenha 2. 

Etapa 3) 2 é par; divida por 2 e obtenha 1. 

Etapa 4) 1 é ímpar; subtraia 1 e obtenha 0.

*/


let lines = parseInt(gets());
 
    let count = 0;
    while(lines !== 0     ){
        (lines%2 === 0) ? (lines= (lines /2)) : (lines= (lines -1));
        count++;
    }
console.log(count) ;