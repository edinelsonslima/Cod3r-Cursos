import React, {useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const[numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))
    
    function gerarNumerosNaoContido(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)+ min)
        return array.includes(novoNumero)
            ? gerarNumerosNaoContido(array) : novoNumero
    }

    function gerarNumeros(){
        const novoArry = Array(props.qtdNumero)
        .fill(0)
        .reduce((a, e) => {
            const novoNumero = gerarNumerosNaoContido(a)
            return [...a, novoNumero ]
        }, []) 
        .sort((a, b) => a - b)
        setNumeros(novoArry)
    }
    
    return(
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={ gerarNumeros}>Gerar Números</button>
        </div>
    )
}