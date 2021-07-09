function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) //Ignora os parâmetros a mais na chamada da função
logParams(1, 2, 3) //Executa normalmente
logParams(1, 2) //Atribui undefined aos parâmetros que faltam

console.log('--------------------------')

//Definindo um valor padrão para os parâmetros
function defaultParams(a = 7, b = 8, c = 9) {
    console.log(a, b, c)
}

defaultParams(1, 2, 3) //Atribui os valores passado pelo parâmetros 
defaultParams(1, 2) // Define o valor padrão aos parâmetros que faltam
defaultParams() // Define todos os valores como padrão setado na function

console.log('--------------------------')

//Definido Quantidade flexível de parâmetros com array
function logNums(nums) {
    for (let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3])

console.log('--------------------------')

//Definido Quantidade flexível de parâmetros com SPREAD/REST
function logNums(...nums) {
    console.log(nums)
}

logNums(1, 2, 3) //Neste método não precisa enviar como array

console.log('--------------------------')

//Spread/Rest em um exemplo pratico
//Soma todos os valores passados como parâmetros
function sumAll(...values) {
    let value = 0
    for (let n of values) {
        value += n
    }
    return value
}

console.log(sumAll(1, 2, 5, 4, 8))