//Anonymous Function
(function (a, b, c) {
    return a + b + c
})

//Function Expression
const sum = function (a, b) {
    return a + b
}

const result = sum(7, 20) //Chamando uma expression function e armazenado o valor na const result
console.log(result)

const anotherSum = sum //Atribuindo a function sum a const anotherSum
console.log(anotherSum(8,5)) 