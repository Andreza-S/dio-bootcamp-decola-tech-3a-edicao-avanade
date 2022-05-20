/*
Dado um número inteiro n, retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.


Exemplo 1

Entrada	Saída
234	15
Explicação: 

Produto de dígitos = 2 * 3 * 4 = 24

Soma dos dígitos = 2 + 3 + 4 = 9

Resultado = 24 - 9 = 15

 

Exemplo 2:

Entrada	Saída
4421	21
Explicação: 

Produto de dígitos = 4 * 4 * 2 * 1 = 32

Soma dos dígitos = 4 + 4 + 2 + 1 = 11

Resultado = 32 - 11 = 21

Restrições:

1 <= n <= 10^5

*/


let lines = gets()
let numeros = [];
for (let i of lines){
    n_inteiro = parseInt(   i      );
    numeros.push(n_inteiro);
}

let product = 1;
let sum = 0;
   
for(let j of numeros){
    product *= j;
    sum += j;
}    
 
print(product - sum);