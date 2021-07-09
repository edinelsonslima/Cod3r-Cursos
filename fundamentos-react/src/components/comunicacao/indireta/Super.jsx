import React, {useState} from 'react';
import Sub from './Sub'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{

    const[label ,setLabel] = useState('Valor')
    const[num ,setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setLabel(texto)
    }

    return (
        <div>
            <h4>{label}: {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}