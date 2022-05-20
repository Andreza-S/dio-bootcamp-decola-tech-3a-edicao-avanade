 function  calculaIdade ( anos )  {
	return  `Daqui a ${ anos } anos, ${ this . nome } terá ${
	    this.idade  +  anos
	} anos de idade.`;
}


const pessoa1 = {
    nome: 'Maria',
    idade: 65,
}

const pessoa2 = {
    nome: 'Fernanda',
    idade: 23,
}

const animal = {
    nome: 'Flofi',
    idade: 6,
    raca: 'Pit',
}

console.log(calculaIdade.call(pessoa1, 67));

console.log(calculaIdade.call(pessoa2, 67));

console.log(calculaIdade.call(animal, 67));
console.log("\n\n");

//---------------------------apply

console.log(calculaIdade.apply(pessoa1, [67]));

console.log(calculaIdade.apply(pessoa2, [67]));

console.log(calculaIdade.apply(animal, [67]));
