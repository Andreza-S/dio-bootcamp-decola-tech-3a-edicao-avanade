// Como lidar com Arrays


//------------------------------------------------------------------------------------
// Spread: uma forma de lidar separadamente com elementos de um array
// O que era parte de um array se torna um elemento independente.

function sum (x,y,z) {
    return x + y + z;
}

const numbers = [1,2,3,];

console.log(sum(...numbers)); // o spread é as reticencias (...), faz com que cada elemento do array seja enviado separadamente

//------------------------------------------------------------------------------------

// Rest: combina os arumentos em um array
// O que era um elemento independente se torna parte de um array

function confereTamanho (...args) {
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1,2) // 2
confereTamanho(1,2,5) // 3

//------------------------------------------------------------------------------------

// Object Destructuring

const user = {
    id: 42,
    displayName: {
        firstName : 'Maria',
        lastName: 'Freitas'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user) // 42

getFullName(user) // Maria Freitas