import React from 'react';

import produtos from '../../data/produtos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            return  <li key={prod.id}>
                         {prod.id} - {prod.name} - R$ {prod.preco}
                    </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
                <ul>
                    {getProdutosListItem()}
                </ul>
        </div>
    )
}