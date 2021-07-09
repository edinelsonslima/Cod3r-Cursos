//Anonymous Function
//IIFE - Immediately Invoked Function Expression
//Passar os parâmetros imediatamente depois da função irá chama-lá 
//Nesse tipo de função necessita o ponto e virgula

// Com parâmetros
(function (a, b, c) {
    console.log(`Result: ${a + b + c}`)
}) (5, 8, 3);

//Sem parâmetros
(function () {
    let x = 20
    console.log(x)
}) ();

//Arrow Function
(() => {
    console.log('arrow#01')
})();

//Arrow em apenas uma linha
//Não precisa dos {}
(() => console.log('arrow#02'))();