import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <div>
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    )
}