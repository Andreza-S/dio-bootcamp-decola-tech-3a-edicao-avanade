// Exemplos de funções

// Declarativas
function precisaDeNome() { // as funcoes declarativas precisam de um nome
    console.log("Sou uma mensgaem de uma função declarativa");
}
precisaDeNome ()


// Funcao atribuidas a expressoes

//com nome
var funcao = function () { // a nomeacao da funcao nesse caso é opcional
    console.log("Sou uma mensgaem de uma função de expressão");
}

funcao()

// Arrow Function

var funcao = () => {
    console.log("Sou uma Arrow Function");
}

funcao()
