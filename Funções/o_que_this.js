// This
    // a palavra reservada this é uma referência de contexto.


const pessoa = {
    firstName: 'Euzinha',
    lasName: 'Mesma',
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lasName; // this está designando o metodo dentro do proprio objeto pessoa, referencia ao proprio objeto
    },
    getId: function() {
        return this.id;
    }
};


pessoa.fullName(); // Euzinha Mesma
pessoa.getId(); // 1


/*
Seu valor pode mudar de acordo comm o lugar no código onde foi chamada.
_______________________________________________________________________
| Contexto:                  | Referência                             |
| ---------------------------|----------------------------------------|
| Em um objeto (método)      | Próprio objeto dono do método          |
| Sozinha                    | Objeto global (em navegadores, window) |
| Função                     | Objeto Global                          |
| Evento                     | Elemento que recebeu o evento          |
-----------------------------------------------------------------------

*/ 

//----------------------------------------------------------------------------------------------------------


// Manipulando o this


// call

const pessoa2 = {
    nome: 'Você',
};

const animal = {
    nome: 'Tonzinho',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa) // Você
getSomething.call(animal) // Tonzinho


//ex:
const myObj = {
    num1: 2,
    num2: 4,
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5); // 12



// Apply:

const myObj2 = {
    num1: 2,
    num2: 4,
};

function soma (a, b) {
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj2, [1, 5]); // é enviado por array
// 12


// Bind
    // clona a estrutura da função onde é chamda e aplica o valor do onjeto passado como parâmetro

const retornaNome = function() {
    return this.nome;
};

let diego = retornaNomes.bind({nome: 'Diego'});

diego(); // Diego