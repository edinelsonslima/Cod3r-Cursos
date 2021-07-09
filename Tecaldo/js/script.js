const teclas = document.querySelectorAll('div.oitava > div')

teclas.forEach(function(tecla){
    tecla.onmousedown = () =>{
        tecla.classList.add('selecionada')
    }
    tecla.onmouseup = () => {
        tecla.classList.remove('selecionada')
    }
    tecla.onmouseleave = () =>{
        tecla.classList.remove('selecionada')
    }
})
