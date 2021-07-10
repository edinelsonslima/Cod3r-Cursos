//Minha solução para o desafio proposto
import { useState } from 'react'

export default function lista0() {

    const [number, setNumber] = useState(0)  
    
    let span = [] 
    function geraSpan(number) {
        for (let i = 0; i <= number; i++) {
            if(i < 10){
                span[i] = <span key={i.toString()}>0{i},</span>
            } else{
                span[i] = <span key={i.toString()}>{i},</span>
            }
        }
    }

    return (
        <div onChange={geraSpan(number)}>
            <h1>Contar até: </h1>
            <input
                type="number"
                value={number}
                onChange={e => { setNumber(e.target.value) }}
            /> <br></br><br></br>
            
            {span}
            
        </div>
    )
}