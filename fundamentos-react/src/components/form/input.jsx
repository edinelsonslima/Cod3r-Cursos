import React, {useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [nome, setNome] = useState('Digite aqui...')

    return (
        <>  
            <h3>{nome}</h3>
            <input type="text" placeholder="Digite aqui..."
            onChange={e => setNome(e.target.value)}/>
        </>
    )
}
