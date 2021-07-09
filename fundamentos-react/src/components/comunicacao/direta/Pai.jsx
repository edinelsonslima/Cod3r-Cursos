import React from 'react';
import Filho from './Filho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
        <Filho {...props}>Edinelson</Filho>
        <Filho sobrenome={props.sobrenome}>Ivanete</Filho>
        <Filho sobrenome="Rios">Ana Alice</Filho>
    </div>