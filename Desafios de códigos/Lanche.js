/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

-----------------------------------------
|   CODIGO  ESPECIFICAÇÃO       PREÇO   |
|   1       Cachorro Quente     R$4.00  |
|   2       X-Salada            R$4.50  |
|   3       X-Bacon             R$5.00  |
|   4       Torrada simples     R$2.00  |
|   5       Refrigerante        R$1.50  |
-----------------------------------------

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

 
Exemplo de Entrada	Exemplo de Saída
3 2                 Total: R$ 10.00

4 3                 Total: R$ 6.00

2 3                 Total: R$ 13.50

*/


let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);
 
var price = 0;

    if (X == 1) {
      price  = 4.00;
    }
    else if (X == 2) {
      price  = 4.50;
    }
    else if (X == 3) {
      price  = 5.00;
    }
    else if (X == 4) {
      price  = 2.00;
    }
    else if (X == 5) {
      price  = 1.50;
    }
    print( "Total: R$ "  + (price*Y).toFixed(2));