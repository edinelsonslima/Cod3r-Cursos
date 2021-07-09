//Function Expression
const incremento1 = function (n) {
    return n + 1
}
console.log(incremento1(1))

//Arrow Function is always anonymous
const incremento2 = (n) => {
    return n + 1
}
console.log(incremento2(5))

//Com apenas um parâmetro não necessita do ()
const incremento3 = n => {  
    return n + 1
}
console.log(incremento3(4))

//Forma mais enxuta de escrever uma arrow function
//Ele já tem um return implícito nessa forma de escrita
//tudo tem que esta na mesma linha
const incremento4 = n =>  n + 1 
console.log(incremento4(62))

//Pode ser com dois parâmetros
//Adicionando apenas as ()
const incremento5 = (a, b) =>  a + b 
console.log(incremento5(5, 5))