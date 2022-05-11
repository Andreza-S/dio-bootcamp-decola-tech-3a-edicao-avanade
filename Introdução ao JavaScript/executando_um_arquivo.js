// Console
// utilizamos o comando "node nomedoarquivo" no terminal para executar esse programa, foi instalado o NodeJs para execução direta pelo terminal do programa em JS.

function returnEvenValeus(array){
    let evenNums = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log("os números pares são: ", evenNums);
}

let array = [1,2,3,4,5,6,7,8,9,10];

returnEvenValeus(array);