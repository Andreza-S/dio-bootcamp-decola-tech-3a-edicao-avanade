/*
Number() = para converter valores em números;
Prompt() = para registrar entradas do usuário;
Alert() = para mostrar mensagens ao usuário;
Template Strings = para usar strings junto com expressoes; 

*/ 


function calculadora (){
    const operacao = Number(prompt('Ecsolha uma operação: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)\n'));

    // Validação da operação
    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    // Caso a operação esteja dentro do padrão
    } else {
        
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        // Validação dos números fornecidos, para não receber palavras (strings)
        // caso o usuário digite palavras apresentará um erro na tela e voltará para tela inicial
        if (!n1 || !n2) {
            alert ('Erro - parâmetros inválidos!')
            calculadora()
        // Caso o usuário forneça números, o programa segue
        } else {
            
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }

            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }

            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a: ${resultado}`)
                novaOperacao();
            }

            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a: ${resultado}`)
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1){
                    calculadora();
                } else if ( opcao == 2){
                    alert('Obrigad@ por utilizar essa calculadora e até mais!!!')
                } else {
                    alert ('Digite uma opção válida!')
                    novaOperacao();
                }
            }

            // Para a operação podemos utilizar o if/ else if/ else para a escola ou
            // utilizar o swtch/case

            // if/ else if/ 
            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisaoReal();
            } else if (operacao == 5) {
                divisaoInteira();
            } else if (operacao == 6) {
                potenciacao();
            }

            // ou o swtch/case - será deixado em comentário para não atrapalhar a execução
            // mas caso seja optado essa forma é só utiliza-la no lugar dos if/else if/ else acima

            /*
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
            }*/
        }

    }

}

calculadora ();