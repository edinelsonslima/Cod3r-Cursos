// Function declaration

// Sem parâmetros
function sayHello() {
    console.log("Hello World!")
}

sayHello()  // Chamando a função para ser executada

// Com parâmetros
function sayHelloTo(name){
    console.log(`Hello ${name}!`)
}

sayHelloTo('Edinelson')  //Chamando a função e passando o parâmetro nome

// Com return
function returnHi(){
    return 'Hi'
}

let greeting = returnHi() //Armazendo o retorno da função em uma variável

console.log(greeting) //Imprimindo o retorno da função que foi armazenado na variável greeting 
console.log(returnHi()) //Imprimindo o retorno da função diretamente


// Com return e passando parâmetro
function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Edinelson')) //Imprimindo o retorno da função diretamente e passando o parâmetro