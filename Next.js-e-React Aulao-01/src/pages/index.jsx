import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" cor="darkviolet" destino="/exemplo" />
            <Navegador texto="Jsx" cor="crimson" destino="/jsx" />
            <Navegador texto="Navegação #01" cor="green" destino="/Navegacao" />
            <Navegador texto="Navegação #02" cor="blue" destino="/Cliente/sp-2/456" />
            <Navegador texto="Componente com estado" cor="gray" destino="/estado" />
            <Navegador texto="Integracao com API 01" cor="purple" destino="/integracao_1" />
            <Navegador texto="Conteudo Estático" cor="#00bbbbbb" destino="/estatico" />
        </div>
    )
}