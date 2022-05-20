// na sintaxe são represnetados por "=>"


const helloword = function() {  // equivalente
    return "Hello World"; 
}

//          ||
//          ||
//         \  /
//          \/

const helloword2 = () => { // equivalente
    return "Hello World";
}
//          ||
//          ||
//         \  /
//          \/
const helloword3 = () => "Hello World"; // arrow function , sintaxe simplificada que equivale


//ex:

const soma1 = (a, b) => a + b;
soma1 (4, 6); // 10


const soma2 = a => a;
soma2 (4); // 4



// Obs:

    // "this" sempre será o objeto global. Métodos para modificar seu valor não irão funciona;
    // Nào existe o objeto "arguments"
    // O construtor também não pode ser utilizado

