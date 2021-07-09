import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    function acao(){
        props.onClicar(Math.random().toFixed(2), 'Sorteado');
    }

  return (
    <div>
        <button onClick={acao}>Alterar</button>
    </div>
    )
}