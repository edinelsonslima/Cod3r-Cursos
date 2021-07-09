import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParamentro.jsx'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import ContadorV2 from './components/contador/contadorV2/ContadorV2'
import Mega from './components/mega/Mega'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#12-Mega" color="#054AA5">
                <Mega qtdNumero={8}></Mega>
            </Card>

            <Card titulo="#11-Contador V2" color="#5645">
                <ContadorV2 passo ={10} valor = {100}></ContadorV2>
            </Card>

            <Card titulo="#10-Contador" color="#055545">
                <Contador passo ={10} valor = {100}></Contador>
            </Card>

            <Card titulo="#9-Input" color="#045">
                <Input></Input>
            </Card>

            <Card titulo="#8-Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#7-Comunicação Direta" color="#FDD900">
                <Pai sobrenome="Lima"></Pai>
            </Card>

            <Card titulo="#6-Condicional V2" color="#FA6900">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>

            <Card titulo="#5-Condicional V1" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#4-Repetição" color="#99594F">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#3-Componentes Com Filhos" color="#A48C669F">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02-Componentes com Paramentro" color="#B123DF">
                <ComParametro titulo='Esse é o titulo' subtitulo='Esse é o subtitulo' />
                <ComParametro titulo='Esse é o titulo 2' subtitulo='Esse é o subtitulo 2' />
            </Card>
            <Card titulo="#01- Primeiro Componente" color="#B12">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);