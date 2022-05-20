/*Desafio
O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0. Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

Entrada
O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

Saída
Imprima a saida conforme a explicação acima e o exemplo abaixo.

 
Exemplo de Entrada	Exemplo de Saída
4
11
0

40
80

*/


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let x = parseInt(gets());

while (x !== 0) {
  let soma = 0;
  
  if  (x %  2 ==  0) {
    for (let i = 0; i < 5; i++) {
       soma = (soma + x);
       x = (x +2);
    }
  } else {
    x = (x +1);
    for (let i = 0; i < 5; i++) {
     soma = (soma + x);
     x = (x +2);
    }
  }
  
  print(soma);
  x = parseInt(gets());
}