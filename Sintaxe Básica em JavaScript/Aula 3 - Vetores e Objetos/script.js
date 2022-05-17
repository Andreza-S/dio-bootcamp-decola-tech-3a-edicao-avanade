// O que são Vetores e Objetos?



// como declarar um array
let array = ['string', 1, true];
console.log(array);


// um array contendo outros arrays
let arrayComArrays = ['string', 1, true, ['string', 2, true], ['string', 3, true]];
console.log(arrayComArrays);


// selecionando o indice de um array
let arrayIndice = ['string', 1, true, ,7,9];
console.log(arrayIndice[2]);



// forEach() (itera um array);
arrayIndice.forEach(function(item, index){console.log(item, index)});



// push() (add item no final do array);
arrayIndice.push('eu sou um novo item');
console.log(arrayIndice);


// unshift () (add item no inicio do array);
arrayIndice.unshift('voltei');
console.log(arrayIndice);


// indexOf () (retorna o indice de um valor);
console.log(arrayIndice.indexOf(7));


// pop() (remove um item no final do array);
arrayIndice.pop();
console.log(arrayIndice);


// shift() (remove item no início do array);
arrayIndice.shift();
console.log(arrayIndice);


// splice() (apaga os valores dentro do intervalo de indices apontado)
arrayIndice.splice(0,3);
console.log(arrayIndice);


// slice() (retorna uma parte de uma array existente)
let arrayNovo = [1,2,6,5, 'o05', 'h', ['l','p']]
console.log(arrayNovo.slice(0,3));


/*
Objetos: dados que possuem propriedades e valores que definem suas características.
deve ser declardo entre chaves "{}".

As propriedades de objetos podem ser atribuídas à variáveis,
facilitando a manipulação do objeto. Chamamos isso de desestruturação.

*/

// criando objetos

let objeto = {string: 'string', number: 1, boolean: true, array: ["array"], objetcIntern: {objetoInterno: "Objeto Interno"}};

console.log(objeto.boolean);
console.log(objeto.array);
console.log(objeto.number);
console.log(objeto.string);
console.log(objeto.objetcIntern);


// desestruturação
var string = objeto.string;
console.log(string);

var boolean = objeto.boolean;
console.log(boolean);

var number = objeto.number;
console.log(number);

var objetto = objeto.objetcIntern;
console.log(objetto);

var arrayDoObjeto = objeto.array;
console.log(arrayDoObjeto);

var {string,boolean, objetcIntern}  = objeto;
console.log(string,boolean, objetcIntern);
