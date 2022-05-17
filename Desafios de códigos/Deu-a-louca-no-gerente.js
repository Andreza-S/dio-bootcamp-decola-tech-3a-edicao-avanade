/*O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na promoção com 70% de desconto. Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente calculado e repassado para os vendedores. Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse desconto.

Exemplos de Entrada	Exemplos de Saída
2
200	
196

 

Exemplos de Entrada	Exemplos de Saída
7
800 	
744     

 

Exemplos de Entrada	Exemplos de Saída
70                               
1000	
300     */

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();
let desconto = parseInt(input);

input = gets();

let precoAntigo = parseInt(input);

let precoNovo =   precoAntigo - (precoAntigo* (desconto/100));   

print(precoNovo);
