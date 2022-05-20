// if/else

function numeroPositivo(num) {
    let resultado;
    if (num < 0) { // condição 1
        resultado = false; // Declaração 1 dentro do if: ocorre caso a condição seja verdadeira
    } else if (num = 0){ // condição 2
        resultado = "= 0";// Declaração 2 dentro do else if: ocorre caso a condição seja verdadeira
    } else {
        resultado = true;// Declaração 3 dentro do else: ocorre caso a condição do if e else if sejam falsas
    }
    return resultado;
}

numeroPositivo(2) // true

numeroPositivo(-15) // false

//--------------------------------------------------------------------

// Switch/case
    // Equivale a uma comparação de tipo e valor
    // Sempre precisa de um valor "default"
    // Ideal para quando se precisa comparar muito valores.

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); // cão
getAnimal(2) // gato
getAnimal(3) // pássaro
getAnimal("1")  // peixe