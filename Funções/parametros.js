// Valores padrão

//Pré-ES2015:

function exponencial (array, num) {
    if (num === undefined) {
        num =1;
    }
    
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    return result;
}

exponencial([,,2,3,4]); // retorna [1,2,3,4]

exponencial([,,2,3,4], 4); // retorna [1,8,27,64]


//Pós-ES2015:

function exponencial (array, num = 1) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    return result;
}

exponencial([,,2,3,4]); // retorna [1,2,3,4]

exponencial([,,2,3,4], 4); // retorna [1,8,27,64]



// Objeto "arguments" -> Um array com todos os parâmetros passdos quando a função foi invocada

function findMax () { // sem argumentos
    let max = -Infinity;

    for (let i =0; i <arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

